
// const hero = gsap.timeline();

// CTR KC - COMMENT
// CTR KU - UNCOMMENT

// //tl.pause();


// hero.from('body', 0, { css: { visibility: 'hidden' } })
//     .from('.hero .text-reveal span', 1, { y: '100%', ease: Power3.easeOut, delay: .5, stagger: .3 } ) 
//     .to(CSSRulePlugin.getRule(".img-reveal-hero::after"), 1.5, { width: '0%', ease: Power2.easeInOut}, '-=.7')
//     .from('.hero .img-reveal img', 1.5, { scale: 1.6, transformOrigin: 'center', ease: Power2.easeInOut }, '-=1.4')
//     .from('.hero .col-text', .7, { y: '10px', opacity: 0, ease: Power2.easeInOut }, '-=.7');


// const features = gsap.timeline({scrollTrigger: { trigger: '.features', start: 'top center'}});

// features.from('.features .text-reveal span', .8, { y: '100%', ease: Power3.easeOut, delay: .2, stagger: .3 })
//         .to(CSSRulePlugin.getRule(".img-reveal-2::after"), 1.5, { width: '0%', ease: Power2.easeInOut}, '-=.7')
//         .from('.features .img-reveal img', 1.5, { scale: 1.6, transformOrigin: 'center', ease: Power2.easeInOut }, '-=1.4')
//         .from('.features .feature', .7, {y: '20px', opacity: 0, ease: Power2.easeInOut, stagger: .2 }, '-=.8')
//         .from('.features .cta-wrapper', .7, { opacity: 0, ease: Power2.easeInOut }, '-=.3')


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
