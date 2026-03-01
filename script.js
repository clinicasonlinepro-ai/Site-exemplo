// Garantir que o DOM está totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

  // ===============================
  // MENU HAMBÚRGUER
  // ===============================
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Fechar menu ao clicar em qualquer link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navLinks.classList.remove("active");
      const target = document.querySelector(link.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // ===============================
  // ANIMAÇÃO HERO
  // ===============================
  const hero = document.querySelector('.hero');
  window.addEventListener('load', () => {
    if(hero) hero.classList.add('show');
  });

  // ===============================
  // ANIMAÇÃO QUANDO ENTRA NA TELA + CONTADOR
  // ===============================
  function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');

        // Contadores
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          let count = 0;
          const target = +counter.getAttribute('data-target');
          const increment = target / 50;
          const update = () => {
            if(count < target){
              count += increment;
              counter.innerText = Math.ceil(count);
              setTimeout(update, 30);
            } else {
              counter.innerText = target.toLocaleString();
            }
          }
          update();
        });

        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(animateOnScroll, {threshold:0.3});
  document.querySelectorAll('.hero, .cards, .especializacao, .servicos, .prova, .final').forEach(el => {
    observer.observe(el);
  });

  // ===============================
  // POP-UP DE AVALIAÇÃO
  // ===============================
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');
  const avaliarBtns = document.querySelectorAll('.avaliar-btn');

  avaliarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if(popup) popup.style.display = 'flex';
    });
  });

  if(closeBtn) closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if(e.target === popup) popup.style.display = 'none';
  });

  const form = document.getElementById('avaliacaoForm');
  if(form) form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Avaliação enviada! Obrigado.');
    popup.style.display = 'none';
    form.reset();
  });

});
