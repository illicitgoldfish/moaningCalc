"use strict";

let screen = document.querySelector(".message");
const btn = document.querySelectorAll(".btn");
let equaled = false;

const moan = [
  "moanOne.mp4",
  "moanTwo.mp4",
  "moanThree.mp4",
  "moanFour.mp4",
  "moanFive.mp4",
  "moanSix.mp4",
  "moanSeven.mp4",
  "moanEight.mp4",
  "moanNine.mp4",
  "moanTen.mp4",
  "moanEleven.mp4",
];

document.addEventListener("click", function (event) {
  if (equaled) {
    screen.textContent = "";
    equaled = false;
  }

  if (event.target.textContent.length < 2) {
    let sound = new Audio(moan[random()]);
    sound.play();

    if (event.target.textContent == "=") {
      let equation = screen.textContent;

      try {
        let output = calculate(equation);
        screen.textContent = screen.textContent + event.target.id + output;
      } catch (error) {
        screen.textContent = "Invalid Input";
      }

      equaled = true;
    } else if (event.target.textContent == "⇦") {
      screen.textContent = screen.textContent.slice(0, -1);
    } else if (event.target.textContent == "c") {
      screen.textContent = "";
    } else {
      screen.textContent = screen.textContent + event.target.id;
    }
  }
});

function calculate(str) {
  return Function(`'use strict'; return (${str})`)();
}

function random() {
  return Math.trunc(Math.random() * 11) + 1;
}
