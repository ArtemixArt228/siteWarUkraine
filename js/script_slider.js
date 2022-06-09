new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true,
    },
    
    effect: 'fade',
    
    autoHeight: true,
    
    spaceBetween: 30,
    
    simulateTouch: false,
    touchRatio: 1,
    TouchAngle: 45,
    grabCursor: false,
    
    loop: true,
    
    speed: 800,
});