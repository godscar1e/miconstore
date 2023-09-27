document.addEventListener('DOMContentLoaded', function () {
    const colorButtons = document.querySelectorAll('.btttn3');
    const sizeButtons = document.querySelectorAll('.btttn2');
    const typeButtons = document.querySelectorAll('.btttn');
    const filterDivs = document.querySelectorAll('.filterDiv');

    let currentColor = 'All';
    let currentSize = 'All';
    let currentType = 'all';

    // Function to filter elements based on color
    function filterSelectionColorPillows(color) {
        currentColor = color;
        filterItems();
        addColorCheckmark(colorButtons, color);
    }

    // Function to filter elements based on size
    function filterSelectionSizePillows(size) {
        currentSize = size;
        filterItems();
        addSizeCheckmark(sizeButtons, size);
    }

    // Function to filter elements based on type
    function filterSelectionType(type) {
        currentType = type;
        filterItems();
        addTypeCheckmark(typeButtons, type);
    }

    // Function to update the displayed items
    function filterItems() {
        filterDivs.forEach(function (element) {
            const dataColor = element.getAttribute('data-color');
            const dataSize = element.getAttribute('data-size');
            const dataType = element.getAttribute('data-type');

            const colorMatch = currentColor === 'All' || currentColor === dataColor;
            const sizeMatch = currentSize === 'All' || currentSize === dataSize;
            const typeMatch = currentType === 'all' || currentType === dataType;

            if (colorMatch && sizeMatch && typeMatch) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }

    function addColorCheckmark(colorButtons, color) {
        colorButtons.forEach(button => {
            const value = button.getAttribute('data-color'); // Используем общий атрибут "data-value"
            if (value === color) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    function addSizeCheckmark(s, sz) {
        s.forEach(button => {
            const value = button.getAttribute('data-size');
            if (value === sz) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    function addTypeCheckmark(typeButtons, type) {
        typeButtons.forEach(button => {
            const value = button.getAttribute('data-type'); // Используем общий атрибут "data-value"
            if (value === type) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }



    // При инициализации страницы:
    addColorCheckmark(colorButtons, 'All');
    addSizeCheckmark(sizeButtons, 'All');
    addTypeCheckmark(typeButtons, 'all');

    // Для кнопок цвета:
    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const color = button.getAttribute('data-color');
            filterSelectionColorPillows(color);
            addColorCheckmark(colorButtons, color);
        });
    });

    // Для кнопок размера:
    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const size = button.getAttribute('data-size');
            filterSelectionSizePillows(size);
            addSizeCheckmark(sizeButtons, size); // Обновляем классы кнопок размера
        });
    });


    // Для кнопок типа:
    typeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const type = button.getAttribute('data-type');
            filterSelectionType(type);
            addTypeCheckmark(typeButtons, type);
        });
    });


    // Initialize filters
    filterSelectionColorPillows('All');
    filterSelectionSizePillows('All');
    filterSelectionType('all');

    // Function to sort items based on color
    function sortItemsByColor(color) {
        const items = document.querySelectorAll('.filterDiv');
        var gapcontainer = document.getElementById("items");
        items.forEach(item => {
            const itemColor = item.getAttribute('data-color');
            if (color === 'All' || itemColor === color) {
                item.style.display = 'block';
                item.style.marginRight = '40px';
            } else {
                item.style.display = 'none';
            }

            gapcontainer.classList.remove("items");
            gapcontainer.classList.add("sorted-items");
        });
    }

    function sortItemsBySize(size) {
        const items = document.querySelectorAll('.filterDiv');
        var gapcontainer = document.getElementById("items");
        items.forEach(item => {
            const itemSize = item.getAttribute('data-size');
            if (size === 'All' || itemSize === size) {
                item.style.display = 'block';
                item.style.marginRight = '40px';
            } else {
                item.style.display = 'none';
            }

            gapcontainer.classList.remove("items");
            gapcontainer.classList.add("sorted-items");
        });
    }
    function sortItemsByType(type) {
        const items = document.querySelectorAll('.filterDiv');
        var gapcontainer = document.getElementById("items");
        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            if (type === 'All' || itemType === type) {
                item.style.display = 'block';
                item.style.marginRight = '40px';
            } else {
                item.style.display = 'none';
            }

            gapcontainer.classList.remove("items");
            gapcontainer.classList.add("sorted-items");
        });
    }

    // Add click event listeners to color buttons
    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const color = button.getAttribute('data-color');
            sortItemsByColor(color);
        });
    });

    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const size = button.getAttribute('data-size');
            sortItemsBySize(size);
        });
    });
    typeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const type = button.getAttribute('data-type');
            sortItemsByType(type);
        });
    });

    // Call the sorting function initially to display all items
    sortItemsByColor('All');
    sortItemsBySize('All');
    sortItemsByType('All');
});


const buttons = document.querySelectorAll('.btttn3');
const container = document.getElementById('pillowsfiltercolor-buttons');
let previousEllipse = null;

buttons.forEach(button => {
    button.addEventListener('click', function () {

        if (previousEllipse && previousEllipse.parentNode) {
            previousEllipse.parentNode.removeChild(previousEllipse);
        }

        const ellipse = document.createElement('div');
        ellipse.className = 'ellipse';

        const checkmark = document.createElement('div');
        checkmark.className = 'checkmark';
        ellipse.appendChild(checkmark);


        const buttonRect = button.getBoundingClientRect();
        const marginTop = buttonRect.top - container.getBoundingClientRect().top - 31 + 'px'; // Уменьшаем на 20px для поднятия
        const marginLeft = buttonRect.left - container.getBoundingClientRect().left - -20 + 'px';

        ellipse.style.marginTop = marginTop;
        ellipse.style.marginLeft = marginLeft;


        container.insertAdjacentElement('afterend', ellipse);


        setTimeout(() => {
            ellipse.style.opacity = 1;
        }, 10);

        previousEllipse = ellipse;

    });
});