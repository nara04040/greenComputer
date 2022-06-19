window.onload = function () {
    new Swiper('.sw-event', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next',
        }
    });

};