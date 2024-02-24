const toggleMenu = document.querySelector('.mobile-nav__toggle');
const mobileNav = document.querySelector('.mobile-nav__menu');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

// State
let isMobileNavOpen = false;

function toggleMobileNav() {
    mobileNav.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    document.body.classList.toggle('hidden');
}

toggleMenu.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    toggleMobileNav();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMobileNavOpen = false;
        setTimeout(() => {
            toggleMobileNav();
        }, 750); // Delay in ms after clicking
    });
});