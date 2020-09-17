"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector(".navbar__menu");
const homeButton = document.querySelector(".home__button");
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

// Make navbar transparent when it is on the top

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--color");
  } else {
    navbar.classList.remove("navbar--color");
  }
});

//Handle scrolling when tapping on the navbar menu

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
});

//Handle sclick on "contact me" button on home

homeButton.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoView(link);
});

//Make home slowly fade to transparent as the window scrolling down

document.addEventListener("scroll", () => {
  console.log(homeHeight);
  console.log(window.scrollY);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(event) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
