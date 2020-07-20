//===============================// Light Theme SWITCHER //===============================//
const page = document.querySelector(".page");
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", () => {
  checkbox.checked ? page.classList.remove("light-theme") : page.classList.add("light-theme");
});

//===============================// Burger Menu //===============================//
const openNav = () => {
  document.getElementById("myNav").style.width = "30%";
};

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};

//==================================// Typing Effect //==================================//
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "HTML5, CSS3, SCSS, Figma/Sketch",
  "Java, JavaScript, ReactJS, NextJS, Redux",
  "IntellJ IDEA, VSCode, Atom ",
  "NodeJS, Express, REST APIs, GraphQL, MongoDB",
  "Postman, Jest, Silenium, SoapAPI",
  "LIFE in general I guess"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
};

const erase = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
