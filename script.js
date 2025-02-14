"use strict";

const openIcon = document.querySelector("#open_menu_icon");

const closeIcon = document.querySelector("#close_menu_icon");

const ul = document.querySelector("nav > ul");

closeIcon.style.display = "none";

openIcon.addEventListener("click", () => {
      console.log("Menu opened");
      ul.classList.add("show");
      closeIcon.style.display = "block";
      openIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
      console.log("Menu closed");
      ul.classList.remove("show");
      openIcon.style.display = "block";
      closeIcon.style.display = "none";
});