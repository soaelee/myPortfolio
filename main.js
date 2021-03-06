"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector(".navbar__menu");
const homeButton = document.querySelector(".home__button");
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
const arrowButton = document.querySelector(".arrow--button");
const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
const navToggleBtn = document.querySelector(".navbar__toggle-btn");

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
  scrollIntoView(link);
  navbarMenu.classList.remove("open");
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

//Show "arrow up" button when scrolling down
document.addEventListener("scroll", (event) => {
  if (window.scrollY > homeHeight / 2) {
    arrowButton.classList.add("visible");
  } else {
    arrowButton.classList.remove("visible");
  }
});

//Handle click on the "arrow button"

arrowButton.addEventListener("click", () => {
  scrollIntoView("#home");
});

//Projects-filtering (category 기준)
workBtnContainer.addEventListener("click", (e) => {
  // btn안에 span에는 dataset값이 들어있지 않아서 오류나니까 부모노드(btn)의 dataset값을 받아서 사용
  const category =
    e.target.dataset.category || e.target.parentNode.dataset.category;

  if (category == null) {
    return;
  }

  //Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  //먼저 나가는 animation 먼저 효과주고
  projectsContainer.classList.add("anim-out");
  //3초 후에, 함수 실행하기
  setTimeout(() => {
    projects.forEach((project) => {
      if (category === "all" || category === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    //제거 안하면 animation-out된 상태로 계속 남아있음
    projectsContainer.classList.remove("anim-out");
  }, 300);
});

//Navbar toggle button for small screen

navToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

function scrollIntoView(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
