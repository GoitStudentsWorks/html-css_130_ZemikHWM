const openBtn = document.querySelector('.header-button-menu');

// моб
const mobMenu = document.querySelector('#mobile-menu');
const mobClose = document.querySelector('.mobmenu-button-close');

// таб
const tabMenu = document.querySelector('#tablet-menu');
const tabClose = document.querySelector('.tabmenu-button-close');

// 👉 ВІДКРИТТЯ
openBtn.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    mobMenu.classList.add('is-open');
  } else {
    tabMenu.classList.add('is-open');
  }
});

// 👉 ЗАКРИТТЯ КНОПКАМИ
mobClose?.addEventListener('click', () => {
  mobMenu.classList.remove('is-open');
});

tabClose?.addEventListener('click', () => {
  tabMenu.classList.remove('is-open');
});

// 👉 КЛІК ПО ФОНУ
mobMenu.addEventListener('click', e => {
  if (e.target === mobMenu) {
    mobMenu.classList.remove('is-open');
  }
});

tabMenu.addEventListener('click', e => {
  if (e.target === tabMenu) {
    tabMenu.classList.remove('is-open');
  }
});

// ✅ ✅ ✅ ГОЛОВНЕ: ЗАКРИТТЯ ПО ЛІНКАХ + ORDER

document
  .querySelectorAll(
    '.mobmenu .header-nav-link, .mobmenu-btn-order, .tabmenu .header-nav-link, .tabmenu-btn-order'
  )
  .forEach(link => {
    link.addEventListener('click', () => {
      mobMenu.classList.remove('is-open');
      tabMenu.classList.remove('is-open');
    });
  });
