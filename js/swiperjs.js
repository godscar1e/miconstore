const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    width: 711,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



function init() {
    $.getJSON("mostpopularpillows.json", goodsOut);
}

function goodsOut(data) {
    var out = '';
    for (var key in data) {
        out += '<div class="swiper-slide">';
        out += '<div class="swiper-slide__container">';
        out += '<div class="swiper-slide__image">' + '<img src="' + data[key].image + '"' + '>' + '</div>';
        out += '<h4 class="swiper-slide__name">' + data[key]['name'] + '</h4>';
        out += '<p class="swiper-slide__oldprice">' + "$" + data[key]['oldprice'] + '</p>';
        out += '<button class="swiper-slide__checkout-btn checkout-btn">';
        out += '<img class="checkout-btn__cartimg" src="./images/item-cart.svg">';
        out += '<p class="checkout-btn__label">' + "CHECKOUT" + '</p>';
        out += '<div class="checkout-btn__price-rect">' + "$" + data[key]['current__price'] + '</div>';
        out += '</button>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
    }
    $('#slides').html(out);
}

$(document).ready(function () {
    init();
});