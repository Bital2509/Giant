let burger = document.getElementById('Burger');
let menu = document.getElementById('MenuList');
let body = document.getElementById('body');


burger.addEventListener('click', function () {
    menu.classList.toggle('menu_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle('lock');
});

$(document).ready(function () {
    var carousel = $("#carouselScreen").waterwheelCarousel({
        flankingItems: 3,
    });

    $('#prev').bind('click', function () {
        carousel.prev();
        return false
    });

    $('#next').bind('click', function () {
        carousel.next();
        return false;
    });
});
