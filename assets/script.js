const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(slides);

// gestion des fleches du carousel

// Variables
const divDots = document.querySelector(".dots");
console.log(divDots);
let index = 0;
const arrow_right = document.querySelector(".arrow_right");
console.log(arrow_right);
const arrow_left = document.querySelector(".arrow_left");
console.log(arrow_left);
const img = document.querySelector(".banner-img");
const text = document.querySelector(".tag-txt");
// Affichage des dots

function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    console.log(dot);
    dot.classList.add("dot");
    divDots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
displayDots();

// Affichage au click droit
function clickRight() {
  arrow_right.addEventListener("click", () => {
    console.log("click arrow right");
    const dotsList = document.querySelectorAll(".dots .dot");
    dotsList[index].classList.remove("dot_selected");
    index++;
    console.log(dotsList);
    if (index > slides.length - 1) {
      index = 0;
    }
    dotsList[index].classList.add("dot_selected");
    img.src = slides[index].image;
    text.textContent = slides[index].tagLine;
  });
}
clickRight();

// Affichage au click gauche

function clickLeft() {
  arrow_left.addEventListener("click", () => {
    console.log("click arrow left");
    const dotsList = document.querySelectorAll(".dots .dot");
    dotsList[index].classList.remove("dot_selected");
    index--;
    console.log(dotsList);
    if (index < 0) {
      index = slides.length - 1;
    }
    dotsList[index].classList.add("dot_selected");
    img.src = slides[index].image;
    text.textContent = slides[index].tagLine;
  });
}
clickLeft();

// fait avec farouk

// function clickOnArrow(element) {
//   const arrow = document.querySelector(element);
//   arrow.addEventListener("click", () => {
//     alert(element);
//   });
// }

// clickOnArrow(".arrow_left");
// clickOnArrow(".arrow_right");

// const dots = document.querySelector(".dots");
// slides.forEach((slides, index) => {
//   const dot = document.createElement("div");
//   dot.classList.add("dot");
//   dot.setAttribute("data-index", index);
//   dots.appendChild(dot);
// });
