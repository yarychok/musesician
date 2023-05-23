// Responsive navigation bar
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
})

// Video slider navigation
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slider');
const contents = document.querySelectorAll('.content');

let sliderNav = function(activation) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    contents.forEach((content) => {
        content.classList.remove('active');
    })

    btns[activation].classList.add('active');
    slides[activation].classList.add('active');
    contents[activation].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    })
})