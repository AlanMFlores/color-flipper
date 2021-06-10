const menu = document.getElementById('menu');
const navMenu = document.querySelector('.nav__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    navMenu.classList.toggle('show-menu');
})