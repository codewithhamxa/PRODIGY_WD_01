const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const icons = document.querySelector(".social-icons");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
  icons.classList.toggle("show-links");
});

// Change navigation style on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});
var bubbleLifeTime = 20;
var noOfBubbles = 100;

var wrapper = document.querySelector(".wrapper");
var bubbles = [];

init();

function init() {
  var bubble;
  for (var i = 0; i < noOfBubbles; i++) {
    bubble = createBubble();
    wrapper.appendChild(bubble);
  }
}

function createBubble() {
  var circleContainer = document.createElement("div");
  circleContainer.classList.add("circle_container");
  circleContainer.style.transform =
    "rotate(" + Math.floor(Math.random() * 360) + "deg)";

  var circle = createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}

function createCircle() {
  var circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.animationDelay = Math.random() * bubbleLifeTime + "s";

  var side = 5 + Math.floor(Math.random() * 5) + "px";
  circle.style.width = side;
  circle.style.height = side;

  return circle;
}
