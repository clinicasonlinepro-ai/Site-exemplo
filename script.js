const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu ao clicar no hambúrguer
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fecha o menu se clicar fora
document.addEventListener('click', (e) => {
  if(!navLinks.contains(e.target) && !hamburger.contains(e.target)){
    navLinks.classList.remove('active');
  }
});