import $ from '../core';

$.prototype.modal = function () {
    const scrolls = calcScroll();
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    for (let i = 0; i< this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            console.log(scrolls);
            document.body.style.marginRight = `${scrolls}px`;
        });
    }
    const  closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(item => {
        $(item).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0`;
        });
    });

    $('.modal').click(e => {
        if(e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0`;
        }
    });
};

$('[data-toggle="modal"]').modal();