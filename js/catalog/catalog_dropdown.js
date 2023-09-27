document.addEventListener('DOMContentLoaded', function () {
    const dropdownSelector = document.getElementById('dropdown__selector');

    dropdownSelector.addEventListener('click', function () {
        // При клике на выпадающий список добавляем или убираем класс show-options
        dropdownSelector.classList.toggle('show-options');
    });
});
