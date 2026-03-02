/* =========================
RESET
========================= */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Segoe UI',sans-serif;
}

body{
  background:#fff;
  color:#1a1a1a;
  line-height:1.6;
  scroll-behavior:smooth;
  overflow-x:hidden;
}

a{text-decoration:none;color:inherit;}
img{max-width:100%;display:block;}

button{
  cursor:pointer;
  border:none;
  border-radius:8px;
  padding:12px 28px;
  font-size:16px;
  font-weight:600;
  background:#003366;
  color:#fff;
  transition:0.3s;
}

button:hover{
  background:#0055aa;
  transform:translateY(-2px);
}

.container{
  width:90%;
  max-width:1200px;
  margin:auto;
}

/* =========================
HEADER
========================= */
.header{
  width:100%;
  background:#fff;
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  box-shadow:0 2px 15px rgba(0,0,0,0.08);
}

.header-container{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:12px 0;
}

.logo img{
  height:42px;
}

/* =========================
NAV
========================= */
.nav{
  display:flex;
  align-items:center;
}

.nav-links{
  list-style:none;
  display:flex;
  gap:25px;
  font-weight:600;
  font-size:14px;
}

/* =========================
HAMBURGER
========================= */
.hamburger{
  display:none;
  flex-direction:column;
  cursor:pointer;
  gap:5px;
  z-index:1200;
}

.hamburger span{
  width:26px;
  height:3px;
  background:#003366;
  border-radius:3px;
  transition:0.3s;
}

/* ANIMAÇÃO X */
.hamburger.active span:nth-child(1){
  transform:rotate(45deg) translate(5px,5px);
}
.hamburger.active span:nth-child(2){
  opacity:0;
}
.hamburger.active span:nth-child(3){
  transform:rotate(-45deg) translate(6px,-6px);
}

/* =========================
MENU POPUP MOBILE
========================= */
@media(max-width:768px){

  .nav-links{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) scale(0.9);
    width:85%;
    max-width:320px;
    background:#fff;
    flex-direction:column;
    align-items:center;
    gap:25px;
    padding:40px 20px;
    border-radius:18px;
    box-shadow:0 20px 60px rgba(0,0,0,0.25);
    opacity:0;
    pointer-events:none;
    transition:0.3s ease;
    z-index:1100;
  }

  .nav-links.active{
    opacity:1;
    transform:translate(-50%,-50%) scale(1);
    pointer-events:auto;
  }

  /* Fundo escurecido */
  .menu-overlay{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.55);
    backdrop-filter:blur(4px);
    opacity:0;
    pointer-events:none;
    transition:0.3s;
    z-index:1000;
  }

  .menu-overlay.active{
    opacity:1;
    pointer-events:auto;
  }

  .nav-links li a{
    font-size:16px;
  }

  .hamburger{
    display:flex;
  }
}

/* =========================
HERO
========================= */
.hero{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
  padding-top:120px;
  flex-wrap:wrap;
}

.hero-text{
  flex:1;
  max-width:550px;
}

.hero-text h1{
  font-size:38px;
  margin-bottom:20px;
  line-height:1.2;
}

.hero-img{
  flex:1;
  position:relative;
}

.hero-img img{
  border-radius:14px;
  height:420px;
  object-fit:cover;
}

.hero-img-overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(to left, rgba(255,255,255,0.1), rgba(255,255,255,0.95));
  border-radius:14px;
}

/* =========================
CARDS
========================= */
.cards{
  display:flex;
  justify-content:center;
  gap:40px;
  margin:60px 0;
}

.card{
  background:#f9f9f9;
  padding:30px;
  border-radius:14px;
  text-align:center;
  box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.card h2{
  font-size:32px;
  color:#003366;
}

/* =========================
SERVIÇOS
========================= */
.servicos{
  padding:60px 0;
}

.servicos-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
  margin-top:30px;
}

.servico-card{
  background:#fff;
  border-radius:14px;
  padding:25px;
  text-align:center;
  box-shadow:0 5px 20px rgba(0,0,0,0.05);
  transition:0.3s;
}

.servico-card:hover{
  transform:translateY(-8px);
}

/* =========================
AVALIAÇÕES
========================= */
.prova{
  margin:100px 0 140px 0; /* AQUI aumentei o espaço inferior */
  text-align:center;
}

.prova h2{
  margin-bottom:40px;
  font-size:32px;
  color:#003366;
}

.prova-item{
  background:#f9f9f9;
  padding:20px;
  border-radius:14px;
  margin-bottom:20px;
  box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

/* =========================
ONDE ESTAMOS
========================= */
.onde-estamos{
  margin-top:60px;
}

/* =========================
FOOTER
========================= */
.footer{
  text-align:center;
  padding:30px 20px;
  background:#f5f8fa;
  margin-top:80px;
  font-size:14px;
  color:#555;
}

/* =========================
RESPONSIVO
========================= */
@media(max-width:768px){

  .hero{
    flex-direction:column;
    text-align:center;
  }

  .hero-img img{
    height:280px;
  }

  .cards{
    flex-direction:column;
  }
}
