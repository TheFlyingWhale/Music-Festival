const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

const toggleNav = () => {
    navMobile.classList.toggle('nav-mobile-display');
}

navBurger.addEventListener("click", toggleNav);