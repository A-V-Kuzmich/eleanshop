import refs from '../../refs/refs.js';
import {
  favoritesRender,
  showroomRender,
  contactRender,
  catalogRender,
  brandRender,
  deliveryRender,
  fittingRender,
  reviewsRender,
} from '../../call-list.js';

const {
  headerEl,
  buttonMobEl,
  svgMobEl,
  svgBinEl,
  socialMobEl,
  logoSvgEl,
  logoTextEl,
  listTextEl,
  svgFavoritesEl,
  navigationEl,
  bodyEl,
  navListEl,
  navSublistEl,
  wrapperEl,
  navLinkEl,
  favoritesEl,
  favQuantityEl,
  binQuantityEl,
} = refs;

//! ---------- МОДАЛКА МОБІЛЬНОЇ ВЕРСІЇ -----------
buttonMobEl.addEventListener('click', fnMobileMenu);

function fnMobileMenu() {
  headerEl.classList.toggle('mod-background-color');
  headerEl.classList.toggle('mobile-menu');
  svgMobEl.forEach(element => element.classList.toggle('mod-hidden'));
  svgBinEl.classList.toggle('mod-stroke');
  svgBinEl.classList.toggle('mod-fill-transp');
  socialMobEl.classList.toggle('mod-hidden');
  logoSvgEl.classList.toggle('mod-fill');
  logoTextEl.classList.toggle('mod-color');
  listTextEl.forEach(element => element.classList.toggle('mod-color'));
  svgFavoritesEl.classList.toggle('mod-stroke');
  navigationEl.classList.toggle('mod-hidden-mob');
  wrapperEl.classList.toggle('wrapper');
  bodyEl.classList.toggle('mobile-open');

  if (!buttonMobEl.children[1].classList.contains('mod-hidden')) {
    navigationEl.addEventListener('click', fnMobileList);
  }

  if (buttonMobEl.children[1].classList.contains('mod-hidden')) {
    navigationEl.removeEventListener('click', fnMobileList);
  }
}

//! ---------- МЕНЮ НАВІГАЦІЇ МОБІЛЬНОЇ ВЕРСІЇ -----------
let markup;

function fnMobileList(event) {
  if (event.target.parentElement.children.length !== 1) {
    if (navListEl.children.length > 1) {
      markup = navListEl.innerHTML;
      [...navSublistEl].forEach(element => element.classList.toggle('mod-hidden-mob'));
      [...navLinkEl].forEach(element => element.classList.toggle('mod-rotate-navigation'));
      navListEl.innerHTML = event.target.parentNode.outerHTML;
    } else {
      navListEl.innerHTML = '';
      navListEl.insertAdjacentHTML('afterbegin', markup);
    }
  } else {
    fnRender(event);
    fnMobileMenu();
  }
}

//! ---------- РЕНДЕРИ СТОРІНОК -----------
navigationEl.addEventListener('click', fnRender);
function fnRender(event) {
  fnSavelocalStorage(event);

  if (event.target.textContent === 'НОВИНКИ' || event.target.textContent === 'Акции')
    catalogRender();

  if (event.target.className === 'navigation-sublist__link') {
    if (
      event.target.parentNode.parentNode.previousElementSibling.textContent === 'КАТЕГОРИИ' ||
      event.target.parentNode.parentNode.previousElementSibling.textContent === 'НАШИ КОЛЛЕКЦИИ'
    ) {
      catalogRender();
    }
  }

  if (event.target.textContent === 'Доставка' || event.target.textContent === 'Возврат')
    deliveryRender();

  if (event.target.textContent === 'Примерка') fittingRender();

  if (event.target.textContent === 'ШОУРУМ' || event.target.textContent === 'Шоурум')
    showroomRender();

  if (event.target.textContent === 'КОНТАКТЫ') contactRender();

  if (
    event.target.textContent === 'О БРЕНДЕ' ||
    event.target.textContent === 'Статьи' ||
    event.target.textContent === 'Блог'
  )
    brandRender();

  if (event.target.textContent === 'Отзывы') reviewsRender();
}

favoritesEl.addEventListener('click', favoritesRender);

//! ----------ЗАПИС В LOCAL STORAGE -----------
function fnSavelocalStorage(event) {
  if (event.target.dataset.atribute)
    localStorage.setItem('catalogFilter', event.target.dataset.atribute);
}

//! ----------ЗМІНА КОЛЬОРУ ТЕКСТУ КІЛЬКОСТІ В КОРЗИНІ І ОБОРАНОМУ -----------
if (Number(favQuantityEl.textContent) > 0) fnChangeColor(favQuantityEl);
if (Number(binQuantityEl.textContent) > 0) fnChangeColor(binQuantityEl);

function fnChangeColor(element) {
  element.style.color = 'red';
}
