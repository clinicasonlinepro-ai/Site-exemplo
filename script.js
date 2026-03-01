// MENU HAMBÚRGUER COM DESFOQUE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SCROLL SUAVE AO CLICAR
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    navLinks.classList.remove("active");
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// ANIMAÇÃO HERO
const hero = document.querySelector('.hero');
window.addEventListener('load', () => {
  hero.classList.add('show');
});

// FUNÇÃO PARA ANIMAÇÃO QUANDO ENTRA NA TELA
function animateOnScroll(entries, observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      if(entry.target.querySelector('.counter')){
        const counter = entry.target.querySelector('.counter');
        let count = 0;
        const target = +counter.getAttribute('data-target');
        const increment = target / 50;
        const update = ()=>{
          if(count<target){
            count+=increment;
            counter.innerText = Math.ceil(count);
            setTimeout(update, 30);
          }else{
            counter.innerText = target.toLocaleString();
          }
        }
        update();
      }
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(animateOnScroll,{threshold:0.3});
document.querySelectorAll('.cards, .sobre, .servicos, .prova, .final').forEach(el=>{
  observer.observe(el);
});
