const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".mobile-overlay");
const body = document.body;

// Abrir / fechar menu
function toggleMenu() {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  // trava scroll
  if (mobileMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

hamburger.addEventListener("click", toggleMenu);

// Fechar clicando no overlay
overlay.addEventListener("click", toggleMenu);

// Fechar ao clicar em qualquer link do menu
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "auto";
  });
});