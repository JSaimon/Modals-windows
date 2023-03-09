"use strict";

const modalWindow = document.getElementById("modalWindow");
const overlay = document.getElementById("overlay");
const buttonMenu = document.getElementById("buttonMenu");

let isModalWindowCreated = false;

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    HideModalContainer();
  }
});

function CreateModalWindow() {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
  buttonMenu.classList.add("blur");
}

function HideModalContainer() {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
  buttonMenu.classList.remove("blur");
}
