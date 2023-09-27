let sortSelect = document.getElementById("dropdown__selector");
let productList = document.getElementById("items");

sortSelect.addEventListener("change", function () {
    let sortValue = sortSelect.value;
    let products = Array.from(productList.children);

    if (sortValue === "price-lowest-to-high") {
        products.sort((a, b) => {
            let priceA = parseInt(a.querySelector(".checkout-btn__price-rect").textContent.match(/\d+/)[0]);
            let priceB = parseInt(b.querySelector(".checkout-btn__price-rect").textContent.match(/\d+/)[0]);
            return priceA - priceB;
        });
    } else if (sortValue === "price-high-to-lowest") {
        products.sort((a, b) => {
            let priceA = parseInt(a.querySelector(".checkout-btn__price-rect").textContent.match(/\d+/)[0]);
            let priceB = parseInt(b.querySelector(".checkout-btn__price-rect").textContent.match(/\d+/)[0]);
            return priceB - priceA;
        });
    }

    products.forEach(product => {
        productList.appendChild(product);
    });
});
