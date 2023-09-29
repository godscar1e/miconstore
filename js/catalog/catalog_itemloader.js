

function init() {
    $.getJSON("./js/catalog/catalogitems.json", function (data) {
        // Assuming that products are now stored in the "products" array
        if (Array.isArray(data.products) && data.products.length > 0) {
            goodsOut(data.products);

        } else {
            console.error('Invalid JSON data format. Expected an array of products.');
        }

    });
}

function goodsOut(products) {
    var out = '';
    products.forEach(function (product) {
        out += '<li class="items__good">';
        out += '<a href ="' + product.href + '">';
        out += '<div class="filterDiv ' + product.color + '" data-color="' + product.color + '" data-size="' + product.size + '" data-type="' + product.type + '" data-price="' + product.current__price + '">';
        out += '<div class="card">';
        out += '<img src="' + product.image + '" class="card__image">';
        out += '<h4 class="card__name">' + product.name + '</h4>';
        out += '<p class="card__oldprice">' + "$" + product.oldprice + '</p>';
        out += '</a>';
        out += '<button class="card__checkout-btn checkout-btn">';
        out += '<img class="checkout-btn__cartimg" src="./images/item-cart.svg">';
        out += '<p class="checkout-btn__label">' + "CHECKOUT" + '</p>';
        out += '<div class="checkout-btn__price-rect">' + "$" + product.current__price + '</div>';
        out += '</button>';
        out += '</div>';
        out += '</div>';
        out += '</li>';
    });
    $('#items').html(out);
}

$(document).ready(function () {
    init();
});

