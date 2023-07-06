/* в этот файл добавляет скрипты*/

/*leaflet*/

// Creating a map object
const map = L.map('map').setView([59.96837, 30.31749], 18);

// Creating a Layer object + Adding layer to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Icon options
var iconOptions = {
  iconUrl: '../../img/icons/stack.svg#map-marker-icon',
  iconSize: [38, 50]
}

// Creating a custom icon
var customIcon = L.icon(iconOptions);

// Creating Marker Options
var markerOptions = {
  title: "OurLocation",
  clickable: true,
  draggable: true,
  icon: customIcon
}

// Creating a Marker + Adding marker to the map
L.marker([59.96837, 30.31749], markerOptions).addTo(map)

/*swiper*/

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,

  //слайдер непрерывного цикла
  loop: true,

  //навигация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  //курсор перетаскивая и рукой
  grabCursor: true,

  //автовысота
  autoHeight: true,
});

/*меню с навигацией*/

const nav = document.querySelector('.main-nav__wrapper');
const toggle = document.querySelector('.user-list__toggle');
const header = document.querySelector('.user-list__toggle');

nav.classList.remove('main-nav__wrapper--nojs');
header.classList.remove('user-list__toggle--nojs');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('main-nav__wrapper--close')) {
    nav.classList.remove('main-nav__wrapper--close');
    nav.classList.add('main-nav__wrapper--open');
    toggle.classList.remove('user-list__toggle--open');
    toggle.classList.add('user-list__toggle--close');

  } else {
    nav.classList.add('main-nav__wrapper--close');
    nav.classList.remove('main-nav__wrapper--open');
    toggle.classList.add('user-list__toggle--open');
    toggle.classList.remove('user-list__toggle--close');
  }
});
