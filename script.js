const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-bar-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
    // Toggle Mobile Menu Visibility
    document.body.classList.toggle("show-mobile-menu");
});

    // Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    // Close menu when the navigation link is clicked
navLinks.forEach(link =>{
    link.addEventListener("click", () => menuOpenButton.click());
})

    // Swiper Initialization

const swiper = new Swiper('.slider-wrapper', {
loop: true,
spaceBetween:25,
grabCursor:true,

        // If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
},

        // Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// Responsive Breakpoints
breakpoints:{
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    }
}
});