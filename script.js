const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a');

// Abrir/fechar menu ao clicar no hambúrguer
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Fechar menu ao clicar em qualquer link
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});