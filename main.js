// MENU DESKTOP
const menuEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

//MENU MOBILE
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

//MENU DESKTOP LOGIC
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

//MENU MOBILE LOGIC
menuIcon.addEventListener('click', toggleMobilepMenu)

function toggleMobilepMenu(){
    mobileMenu.classList.toggle('slideMenuB')
}