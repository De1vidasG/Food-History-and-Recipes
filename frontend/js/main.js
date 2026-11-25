const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = hamburgerMenu.classList.toggle("open");
  hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
});
