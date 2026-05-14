// ==========================
// 1. TYPING ANIMATION
// ==========================

const texts = [
  "Web Developer",

];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".multiple-text");

function typeText() {
  if (!textElement) return;

  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (!textElement) return;

  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, speed);
  } else {
    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    setTimeout(typeText, 500);
  }
}

window.addEventListener("load", typeText);


// ==========================
// 2. SCROLL REVEAL ANIMATION
// ==========================

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


// ==========================
// 3. SMOOTH SCROLL NAVBAR
// ==========================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ==========================
// 4. TOOL CARD HOVER EFFECT
// ==========================

const toolCards = document.querySelectorAll(".tool-card");

toolCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});