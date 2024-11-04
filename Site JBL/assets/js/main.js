/*=============== SHOW MENU ===============*/
const menuShow = document.getElementById("menu-btn");
const navItems = document.getElementById("menu-items");

const menuClose = document.getElementById("menu-close");

menuShow.addEventListener("click", () => {
  navItems.classList.add("active");
});

menuClose.addEventListener("click", () => {
  navItems.classList.remove("active");
});

/*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('active')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
// const blurHeader = () =>{
//     const header = document.getElementById('header')

//     this.scrollY >= 50 ? header.classList.add('blur-header')
//                         : header.classList.remove('blur-header')
// }

// window.addEventListener('scroll', blurHeader)
/*=============== SWIPER FAVORITES ===============*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },

    500: {
      slidesPerView: 3,
    },

    400: {
      slidesPerView: 1,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const esconderLinks = document.querySelector("ul");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");

link1.addEventListener("click", () => {
  esconderLinks.classList.remove("active");
});
link2.addEventListener("click", () => {
  esconderLinks.classList.remove("active");
});
link3.addEventListener("click", () => {
  esconderLinks.classList.remove("active");
});
link4.addEventListener("click", () => {
  esconderLinks.classList.remove("active");
});

// /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({});

sr.reveal(".header__container, .footer__logo, .footer__form", {
  duration: 1000,
  distance: "-100%",
});

sr.reveal(" .favorite__container h1, .footer__right", {
  duration: 1100,
  distance: "90%",
  origin: "left",
  delay: 100,
});

sr.reveal(".model__img img", {
  duration: 1300,
  distance: "60%",
  origin: "left",
  delay: 100,
});

sr.reveal(".home__img", {
  duration: 1600,
  distance: "120%",
  origin: "left",
  delay: 100,
});

sr.reveal(" .about__img, .home__tooltip", {
  duration: 1800,
  distance: "45%",
  origin: "left",
  delay: 100,
});

sr.reveal(" .home__tittle span", {
  duration: 2000,
  distance: "-150%",
  origin: "right",
  delay: 100,
});

sr.reveal(".button, .model__sponsor, .swiper-button-prev,  .swiper-button-next", {
  duration: 2000,
  distance: "-100%",
  origin: "top",
  delay: 100,
});

sr.reveal(".home__social, .home__line-text", {
  duration: 2000,
  distance: "60%",
  origin: "bottom",
  delay: 100,
});

sr.reveal(".about__container h1, .model__container h1, .footer__left", {
  duration: 1300,
  distance: "-60%",
  origin: "right",
  delay: 250,
});

sr.reveal(".about__container p", {
  duration: 1600,
  distance: "-50%",
  origin: "right",
  delay: 250,
});

sr.reveal(".favorite__swiper", {
  duration: 3000,
  distance: "50%",
  origin: "right",
});

sr.reveal(".tooltip__info1, .tooltip__info4", {
  duration: 3000,
  distance: "10%",
  origin: "right",
  delay: 200,
});

sr.reveal(".tooltip__info2, .tooltip__info3", {
  duration: 3000,
  distance: "50%",
  origin: "left",
  delay: 200,
});

sr.reveal(".footer__social, .footer p", {
  duration: 2000,
  distance: "80%",
  origin: "bottom",
  delay: 20,
});
