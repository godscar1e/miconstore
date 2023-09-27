const rangeInput = document.querySelectorAll(".range-input input"),
    range = document.querySelector(".price-filter-slider .progress"),
    priceInput = document.querySelectorAll(".price-input input");
let priceGap = 10; // Минимальное расстояние между ползунками

function updateRangeFromInputs() {
    let minPrice = parseInt(priceInput[0].value);
    let maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap) {
        rangeInput[0].value = minPrice;
        rangeInput[1].value = maxPrice;
        updateRangeStyles();
    }
}

function updateInputsFromRange() {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
        if (event.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
        } else {
            rangeInput[1].value = minVal + priceGap;
        }
    }

    priceInput[0].value = rangeInput[0].value;
    priceInput[1].value = rangeInput[1].value;
    updateRangeStyles();
}

function updateRangeStyles() {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
    range.style.right = 100 - ((maxVal / rangeInput[1].max) * 100) + "%";
}

rangeInput.forEach(input => {
    input.addEventListener("input", updateInputsFromRange);
});

priceInput.forEach(input => {
    input.addEventListener("input", updateRangeFromInputs);
});

// Дополнительный код для фильтрации товаров (похож на ваш исходный код)
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const products = document.querySelectorAll(".filterDiv");

function filterProducts() {
    const minPrice = parseInt(minPriceInput.value);
    const maxPrice = parseInt(maxPriceInput.value);

    products.forEach((product) => {
        const price = parseInt(product.getAttribute("data-price"));
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

minPriceInput.addEventListener("input", filterProducts);
maxPriceInput.addEventListener("input", filterProducts);

// Изначально запустите фильтрацию, чтобы отобразить все продукты
filterProducts();
