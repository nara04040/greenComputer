$(document).ready();

window.onload = function () {
    new Swiper('.sw-visual', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 1000
    });

};