document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const nav = document.querySelector('nav');


    menuButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
