// Menu hamburguer
const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  
  // Corrigindo o uso de setAttribute
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

// Scroll Suave
const menuItens = document.querySelectorAll('.menu-nav a[href^="#"]');
const cardsServicos = document.querySelectorAll('.cards-servicos a');
const servicosLink = document.querySelector('.menu-nav a[href="#section-servicos"]');
const sobreNos = document.querySelector('.menu-nav a[href="#sobre-nos"]');

menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

cardsServicos.forEach(card => {
  card.addEventListener('click', scrollToIdOnClick);
});

// Adicione um evento de clique ao link "Serviços e sobre nós" no menu
servicosLink.addEventListener('click', scrollToIdOnClick);
sobreNos.addEventListener('click', scrollToIdOnClick);

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.currentTarget;
  const id = element.getAttribute('href');
  const targetElement = document.querySelector(id);
  
  if (targetElement) {
    const to = targetElement.offsetTop;

    // Scroll suave
    window.scroll({
      top: to,
      behavior: 'smooth'
    });
  }
}
