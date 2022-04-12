//navbar
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const to_top = document.querySelector("#to_top");

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        to_top.classList.remove('hidden');
        to_top.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        to_top.classList.remove('flex');
        to_top.classList.add('hidden');
    }
}

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("hidden")
})

// klik diluar hamburger
window.addEventListener('click', function(e){
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
})

//dark mode toogle 
const darkToggle = document.querySelector("#dark_toggle");
const html = document.querySelector("html");

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

//pindah posisi toggle sesuai mode 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}