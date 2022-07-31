
const headerMenu = document.querySelector('header .header-menu');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    headerMenu.classList.toggle('is-active');
})

document.addEventListener('DOMContentLoaded', () => {
    new Splide( '#splide-section2', {
        type   : 'slide',
        perPage: 3,
        perMove: 1,
        pagination: false,
        gap: '40px',
        breakpoints: {
            768: { 
                perPage: 2,
                type: 'loop'
            },
            560: { gap: '1rem' }
        }
    }).mount();

    new Splide( '#splide-section4', {
        type  : 'loop',
        speed: 0,
        pagination: false,
        gap: '40px' 
    }).mount();

})

console.log('asd')