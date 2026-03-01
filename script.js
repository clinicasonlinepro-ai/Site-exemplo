// MENU HAMBÚRGUER COM DESFOQUE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SCROLL SUAVE AO CLICAR
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove("active");
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// FUNÇÃO PARA ANIMAÇÃO QUANDO ENTRA NA TELA
function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');

      // ANIMA TODOS OS COUNTERS DA SEÇÃO
      entry.target.querySelectorAll('.counter').forEach(counter => {
        let count = 0;
        const target = +counter.getAttribute('data-target');
        const increment = Math.ceil(target / 50); // animação suave
        const update = () => {
          count += increment;
          if(count < target){
            counter.innerText = count.toLocaleString();
            requestAnimationFrame(update);
          } else {
            counter.innerText = target.toLocaleString();
          }
        }
        requestAnimationFrame(update);
      });

      observer.unobserve(entry.target);
    }
  });
}

// OBSERVER PARA TODAS AS SEÇÕES QUE PRECISAM APARECER
const observer = new IntersectionObserver(animateOnScroll, {threshold:0.3});
document.querySelectorAll('.hero, .cards, .sobre, .servicos, .prova, .final').forEach(el => {
  observer.observe(el);
});
