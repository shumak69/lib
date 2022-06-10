import $ from '../core';

$.prototype.slider = function (auto) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(item => {
            item.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if(offset == +width.replace(/\D/g,'') * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g,'');
            }
            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(item => {
                item.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if(offset == 0) {
                offset = +width.replace(/\D/g,'') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g,'');
            }
            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(item => {
                item.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });
        document.querySelector('.carousel-indicators').addEventListener('click', (e) => {
            if(e.target.getAttribute('data-slide-to')) {
                slideIndex = +e.target.getAttribute('data-slide-to');
                dots.forEach(item => {
                    item.classList.remove('active');
                });
                dots[slideIndex].classList.add('active');
                offset = +width.replace(/\D/g,'') * slideIndex;
                slidesField.style.transform = `translateX(-${offset}px)`;
            }
        });
        if(typeof(auto) === 'number') {
            let interval;
            const activateAnimation = () => {
                interval = setInterval(() => {
                    this[i].querySelector('[data-slide="next"]').click();
                },auto);
            };
            activateAnimation();
            
            this[i].addEventListener('mouseenter', () => {
                clearInterval(interval);
            });
            this[i].addEventListener('mouseleave', () => {
                activateAnimation();
            });
        }
    }
};

$('.carousel').slider();

$.prototype.createSlider = function ({img, prev, next, auto}) {
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    const carouselDots = [];
    
    carousel.innerHTML = `
    <ol class="carousel-indicators">
        </ol>
        <div class="carousel-inner">
            <div class="carousel-slides">
            </div>
        </div>
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">${prev}</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">${next}</span>
        </a>
        `;
    // console.log(carouselDots);
    for (let i = 0; i < Object.keys(img).length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i);
        if(i == 0) {dot.classList.add('active');}
        carousel.querySelector('.carousel-indicators').appendChild(dot);
        carouselDots.push(dot);
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `<img src="${img[i]}" alt="photo">`;
        carousel.querySelector('.carousel-slides').appendChild(item);
    }
    // document.querySelector('.carousel-indicators').innerHTML = carouselDots;
    document.body.appendChild(carousel);
    if(typeof(auto) === 'number') {
        $('.carousel').slider(auto);
    }
};