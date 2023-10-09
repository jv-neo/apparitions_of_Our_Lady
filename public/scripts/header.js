const navContainer = document.querySelector("#container");
const menu = document.querySelector("#menu");
const dropButton = document.querySelector("#dropbutton");
const dropMenu = document.querySelector("#dropmenu");
const main = document.querySelector("main");
const help = document.querySelector("#help");
let thing = dropMenu.getAttribute("data-visible");

main.addEventListener("click", () => {
  const navVisibility = navContainer.getAttribute("data-visible");
  const dropMenuVisibility = dropMenu.getAttribute("data-visible");
  if (dropMenuVisibility === "true") {
    dropMenu.setAttribute("data-visible", false);
    dropButton.setAttribute("aria-expanded", false);
  } else if (navVisibility === "true") {
    navContainer.setAttribute("data-visible", false);
    menu.setAttribute("aria-expanded", false);
  }
});

dropButton.addEventListener("click", () => {
  const dropMenuVisibility = dropMenu.getAttribute("data-visible");
  if (dropMenuVisibility === "false") {
    dropMenu.setAttribute("data-visible", true);
    dropButton.setAttribute("aria-expanded", true);
  } else if (dropMenuVisibility === "true") {
    dropMenu.setAttribute("data-visible", false);
    dropButton.setAttribute("aria-expanded", false);
  }
});

menu.addEventListener("click", () => {
  const navVisibility = navContainer.getAttribute("data-visible");
  const dropMenuVisibility = dropMenu.getAttribute("data-visible");
  if (navVisibility === "false") {
    navContainer.setAttribute("data-visible", true);
    menu.setAttribute("aria-expanded", true);
    console.log(navVisibility);
  } else if (dropMenuVisibility === "true") {
    dropMenu.setAttribute("data-visible", false);
    dropButton.setAttribute("aria-expanded", false);
    console.log(dropMenuVisibility);
  } else if (navVisibility === "true") {
    navContainer.setAttribute("data-visible", false);
    menu.setAttribute("aria-expanded", false);
    console.log(navVisibility);
  }
});

dropButton.addEventListener("focus", () => {
  help.setAttribute("tabindex", "3");
});
dropButton.addEventListener("click", () => {
  help.setAttribute("tabindex", "44");
});
