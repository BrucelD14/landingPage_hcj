const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active");
})