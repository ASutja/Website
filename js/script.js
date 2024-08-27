document.addEventListener("DOMContentLoaded", function () {
    const dropdownCurrent = document.querySelector(".dropdown-current");
    const dropdownList = document.querySelector(".dropdown-list");

    dropdownCurrent.addEventListener("click", function () {
        dropdownList.classList.toggle("dropdown-list--hidden");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.header-range__buttons');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
