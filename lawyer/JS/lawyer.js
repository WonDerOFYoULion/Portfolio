//! СЛАЙДЕР

let i = 1;
const buttonLeft = document.querySelector('.js-button-left');
const buttonRight = document.querySelector('.js-button-right');
const slidepng = document.querySelector('.Header1');

let anim1 = document.querySelector('.slide-left-elemen1');
let anim2 = document.querySelector('.slide-left-elemen2');
let anim3 = document.querySelector('.slide-left-elemen3');

animF();

buttonLeft.addEventListener('click', () => {

  if (i === 1) {
    slidepng.classList.remove(`Header${i}`);
    i = 3;
    animF();
  } else {
    slidepng.classList.remove(`Header${i}`);
    i -= 1;
    animF();
  }

slidepng.classList.add(`Header${i}`);
animF();
});

buttonRight.addEventListener('click', () => {

  if (i === 3) {
    slidepng.classList.remove(`Header${i}`);
    i = 1;
    animF();
  } else {
    slidepng.classList.remove(`Header${i}`);
    i +=1;
    animF();
  }

slidepng.classList.add(`Header${i}`);
animF();
});

function animF() {
  if (i === 1) {
    anim1.classList.add('slide-left-elemen-act');
    anim2.classList.remove('slide-left-elemen-act');
    anim3.classList.remove('slide-left-elemen-act');
  } else if (i === 2) {
    anim1.classList.remove('slide-left-elemen-act');
    anim2.classList.add('slide-left-elemen-act');
    anim3.classList.remove('slide-left-elemen-act');
  } else if (i === 3) {
    anim1.classList.remove('slide-left-elemen-act');
    anim2.classList.remove('slide-left-elemen-act');
    anim3.classList.add('slide-left-elemen-act');
  }
}

//! АВТОМАТИЧЕСКАЯ СМЕНА КАРТИНОК СЛАЙДЕРА (НЕ ДУМАЮ, ЧТО НУЖНА)

// setInterval(() => {
//   if (i === 1) {
//     slidepng.classList.remove(`Header${i}`);
//     i = 3;
//   } else {
//     slidepng.classList.remove(`Header${i}`);
//     i -= 1;
//   }

// slidepng.classList.add(`Header${i}`);

// }, 5000);

//! ГЕНЕРАЦИЯ РАБОТНИКОВ 

const workers = [{
  name: 'Горюнова Полина Алексеевна',
  who: 'Юрист международного права',
  what: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
  years: '12 лет юридической практики',
  img: 1
},{
  name: 'Миронов Александр Германович',
  who: 'Кредитный адвокат, банковский юрист',
  what: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
  years: '12 лет юридической практики',
  img: 2
},{
  name: 'Стоп, а кто это?',
  who: 'Saul Goodman',
  what: 'James Morgan "Jimmy" McGill, better known by his business name Saul Goodman, is a fictional character created by Vince Gilligan and Peter Gould and portrayed by Bob Odenkirk in the television franchise Breaking Bad.',
  years:'64',
  img: 3
},{
  name: 'Архипов Максим Константинович',
  who: 'Корпоративный юрист',
  what: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
  years: '12 лет юридической практики',
  img: 4
}
];

let html = '';

let a = document.querySelector('.workers-humans-grid');

workers.forEach((man) => {
  html += 
    `
    <div class="workers-humans-grid-element"> <!--ЭЛЕМЕНТ ГРИДА-->
    <div class="worker__inner">

      <div class="worker-face worker-face__front"> <!--ЛИЦЕВАЯ СТОРОНА-->
        <div class="worker-face__front-cont">
          <div>
            <img class="worker-img" src="../IMG/lawyer/worker${man.img}.png" alt="1worker">
          </div>
  
          <div>
            <div class="worker-front-content-h">
              ${man.name}
            </div>
      
            <div class="worker-front-content-p">
              ${man.who}
            </div>
          </div>
        </div>
      </div> <!--ЛИЦЕВАЯ СТОРОНА-->

      <div class="worker-face worker-face__back worker-background"> <!--ЗАДНЯЯ СТОРОНА-->

        <div class="worker-back-content">
          <div class="workers-humans-top">
            <div class="worker-back-content-h">
              ${man.name}
            </div>
            <div class="worker-back-content-p">
              ${man.who}
            </div>
          </div>
      
          <div class="worker-back-content-p">
            ${man.what}
          </div>
      
          <div class="worker-back-content-h">
            ${man.years}
          </div>
        </div>

      </div> <!--ЗАДНЯЯ СТОРОНА-->

    </div>
  </div> <!--ЭЛЕМЕНТ ГРИДА-->
    `
  a.innerHTML = html;
});

//! СМЕНА ФОНА РАБОТНИКОВ 

let flip = document.querySelectorAll('.worker__inner');

flip.forEach((flipelement) => {
  flipelement.addEventListener('click', () => {
    flipelement.classList.toggle('is-flipped');
  });
});

//! ГЕНЕРАЦИЯ КОМЕНТРАИЕВ

const commentsData = [{
  company: 'ООО “ИТ Консалтинг”',
  name: 'Логинова Анастасия',
  img: '../IMG/lawyer/Rectangle 28.png',
  comment: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния,взял одно из самых странных слов  Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния,взял одно из самых странных слов '
},{
  company: 'ООО “ИТ Консалтинг”',
  name: 'Кира',
  img: '../IMG/lawyer/worker3.png',
  comment: 'Меня зовут Кира Йошикагэ. Мне 33 года. Мой дом находится в северо-восточной части Морио, в районе поместий. Работаю в офисе сети магазинов Kame Yu и домой возвращаюсь, самое позднее, в восемь вечера. Не курю, выпиваю изредка. Ложусь спать в 11 вечера и убеждаюсь, что получаю ровно восемь часов сна, несмотря ни на что. Перед сном я пью тёплое молоко, а также минут двадцать уделяю разминке, поэтому до утра сплю без особых проблем. Утром я просыпаюсь, не чувствуя ни усталости, ни стресса, словно младенец. На медосмотре мне сказали, что никаких проблем нет. Я пытаюсь донести, что я обычный человек, который хочет жить спокойной жизнью. Я не забиваю себе голову проблемами вроде побед или поражений, и не обзавожусь врагами, из-за которых не мог бы уснуть. Я знаю наверняка: в таком способе взаимодействия с обществом и кроется счастье. Хотя, если бы мне пришлось сражаться, я бы никому не проиграл.'
}]

let HtmlComments = '';

let commentHolder = document.querySelector('.comments-blocks-grid');

commentsData.forEach((commentElem) => {
  HtmlComments += `
  <div class="comment-block">
    <div class="comments-container">
      <div class="comments-flex-grid">

        <div class="comments-main-flex">

          <div class="comments-head"> 
            <img class="comments-ava" src="${commentElem.img}" alt="ava">

            <div class="comments-head-title">
              <span class="textp comment-name-clapping">${commentElem.company}</span> 
              <span class="texth comment-name-clapping">${commentElem.name}</span>
            </div>
          </div>

          <img class="stylus" src="../IMG/lawyer/Stylus.png" alt="stylus">
          
        </div>

        <div class="comments-inner">
          <div class="comments-head-exectly">
            <p class="trrt textp">
              ${commentElem.comment}
            </p>
          </div>
        </div>
    
      </div>              
    </div>
  </div>
  `
  commentHolder.innerHTML = HtmlComments;
});

//! ВЫПАДАЮЩЕЕ МЕНЮ 

const menu = document.querySelector('.forgot2');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  menu.classList.toggle('forgot2-click');
})
