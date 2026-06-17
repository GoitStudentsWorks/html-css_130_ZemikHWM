const openBtn = document.querySelector('.header-button-menu');
const menu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('.mobmenu-button-close');
const links = document.querySelectorAll('.mobmenu .header-nav-link');

// відкрити
openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
});

// закрити кнопкою
closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});

// клік по фону
menu.addEventListener('click', e => {
  if (e.target === menu) {
    menu.classList.remove('is-open');
  }
});

// ✅ клік по пункту меню
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});
