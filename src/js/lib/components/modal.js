import $ from '../core';

$.prototype.modal = function (isCreated) {
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
            document.body.style.marginRight = `${scrolls}px`;
        });
        const  closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(item => {
            $(item).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0`;
                if(isCreated) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click(e => {
            if(e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0`;
                if(isCreated) {
                    document.querySelector(target).remove();
                }
        }
    });
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for(let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').replace(/#/, ''));
        // btns = {count: num, settings: [[text, classname=[], close, cb]]}
        const buttons = [];
        for (let j = 0; j < btns.settings.length; j++) {
            const {settings} = btns;
            const setting = settings[j];
            let btn = document.createElement('button');
            btn.classList.add('btn', ...setting[1]);
            btn.textContent = setting[0];
            if (setting[2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (setting[3] && typeof(setting[3]) === 'function') {
                btn.addEventListener('click', (setting[3]));
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};