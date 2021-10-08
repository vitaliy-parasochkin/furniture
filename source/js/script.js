const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    document.body.classList.toggle('lock');
    menuBody.classList.toggle('active');
})

//SLIDER-NEW
new Swiper('.slider', {
    navigation: {
        nextEl: '.column__slider__next',
        prevEl: '.column__slider__prev'
    },
    pagination: {
        el: '.column__slider__counter',
        type: 'fraction',
        renderFraction: (currentClass, totalClass) => {
            return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>'
    
        }
    },
    
})

//benefits-slider
const benefitsSlider = new Swiper('.benefits-slider', {
    navigation: {
        nextEl: '.benefits-slider__next',
        prevEl: '.benefits-slider__prev'
    },
    slidesPerView: 3,
    spaceBetween:30
})

//categories-tabs

document.querySelectorAll('.categories__icon').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const id = item.getAttribute('href').replace('#', '');

        document.querySelectorAll('.categories__tab').forEach((child) => {
            child.classList.remove('categories__tab-active')
        })

        document.querySelectorAll('.categories__icon').forEach((child) => {
            child.classList.remove('categories__icon-active')
        })
        item.classList.add('categories__icon-active');

        document.getElementById(id).classList.add('categories__tab-active');
    })
})
