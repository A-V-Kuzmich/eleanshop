import refs from '../../refs/refs.js'
import set from '../../../../src/js/json/videoSet.json';
import setHbs from "../../../../src/views/partials/reviews/videoSet.hbs";
import '../../../images/img/Reviews/poster/Black2V.jpg'
import '../../../images/img/Reviews/poster/23.jpg'
import '../../../images/img/Reviews/poster/55.jpg'
import '../../../images/img/Reviews/poster/78.jpg'

// window.jQuery = window.$ = require('jquery');
// require('../../slick/slick.min.js');

const { mainEL } = refs;
// console.log(refs)
const setVideoHbs = setHbs(set)
mainEL.insertAdjacentHTML('beforeend', setVideoHbs);
console.log(setVideoHbs)

// 1. Содание разметки сета
// const createSetList = (set) => {
//     return setHbs(set);
// }


$('.videoset').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  mobileFirst:true,
  responsive: [
    {
      breakpoint: 1377,
      settings: {
        slidesToShow: 4,
        centerPadding: '40px',
        infinite: false,
      }
    }]
});

// const setListMarkup = createSetList(set);

//  mainEL.insertAdjacentHTML('beforeend',setListMarkup);


// // 2. Создание click
// setList.addEventListener('click', onOpenModal);
//  BtnEl.addEventListener('click', onCloseModal);
// overlay.addEventListener('click', onCloseModal);


  
//   //3. работа модального окна
// function onOpenModal(evt) {
//     console.log(evt);
//     // evt.preventDefault();
//     // if (evt.target.nodeName !== 'VIDEO') {
//     //     return;
//     // }
// }

// function replaceAtribute(src ) {
//   videoEl.src = src;
  
// }

// function onCloseModal(e) {
//    e.videobox.classList.remove('is-open')
//     replaceAtribute(" ")
// };

// // 4. Закрытие модалки с помощью "ESC"
// window.addEventListener('keydown', onCloseModalEsc);

// function onCloseModalEsc(evt) {
//   if (evt.code === 'Escape') {
//     onCloseModal()
//   };
  
// }
