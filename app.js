const menu = document.querySelector('#mobileNav');
const bg = document.getElementById('nav-page');
const menuItems = document.querySelector('.menu_links');

menu.addEventListener('click', function(){
    // menu.classList.toggle('is-active'),
    bg.classList.toggle('active'),
    menuItems.classList.toggle('active')
});