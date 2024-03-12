const BODY = document.querySelector('body');
let burgerButton = document.querySelector('.header__burger-button');
let burgerWrapper = document.querySelector('.header__button-wrapper');
let burgerClicked = document.querySelector('.header__button-wrapper_clicked');
let nav_768 = document.querySelector('.nav__768');
let navList = document.querySelector('.nav__list');
let burgerButtonKey = false;
let currentOptions = {
    'pageLang': 'en',
    'colorTheme': 'darkTheme.css'
};

window.addEventListener('resize', () => {
    burgerWrapper.classList.toggle('header__burger-button_clicked');
    burgerButton.classList.remove('header__burger-button_clicked');
    BODY.classList.remove('body-overflow-hidden');
    nav_768.classList.remove('nav__768_active');
    burgerButtonKey = false;
})

burgerWrapper.addEventListener('mouseout', () => {
    burgerButton.style = `color: #ffffff; cursor: pointer`
})

burgerWrapper.addEventListener('mouseover', () => {
    if (document.querySelector('.main-styles').getAttribute('href') == 'lightTheme.css') {
        burgerButton.style = `filter: invert(50%) sepia(50%) saturate(638%) hue-rotate(7deg) brightness(80%)
    contrast(100%); cursor: pointer`;
    } else {
        burgerButton.style = `filter: invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%)
    contrast(87%); cursor: pointer`;
    }
})

burgerWrapper.addEventListener('click', () => {
    if (burgerButtonKey == false) {
        navList.style = `animation: show;animation-duration: 0.4s;`;
        BODY.classList.toggle('body-overflow-hidden');
        burgerWrapper.classList.toggle('header__burger-button_clicked');
        burgerButton.classList.toggle('header__burger-button_clicked');
        nav_768.classList.toggle('nav__768_active');
        burgerButtonKey = true;
    } else {
        navList.style = `animation: out;animation-duration: 0.4s;`;
        burgerWrapper.classList.toggle('header__burger-button_clicked');
        burgerButton.classList.toggle('header__burger-button_clicked');
        setTimeout(() => {
            BODY.classList.toggle('body-overflow-hidden');
            nav_768.classList.toggle('nav__768_active');
            burgerButtonKey = false;
        }, 300)
    }
})

navList.childNodes.forEach((item, i, arr) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navList.style = `animation: out;animation-duration: 0.4s;`;
        burgerWrapper.classList.toggle('header__burger-button_clicked');
        burgerButton.classList.toggle('header__burger-button_clicked');
        setTimeout(() => {
            BODY.classList.toggle('body-overflow-hidden');
            nav_768.classList.toggle('nav__768_active');
            burgerButtonKey = false;
            document.location.href = e.target.getAttribute('href');
        }, 300);
    })
});

console.log(`
Уважаемый проверяющий!!!

Все пункты выполнены.

Смена изображений в секции portfolio +25
Изображения разных времён года получаем из папок с соответствующими названиями
Изображения можно заменить на другие с целью улучшения качества созданного приложения
при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5
Перевод страницы на два языка +25
Для перевода можно воспользоваться файлом translate.js
Содержание файла можно редактировать или полностью изменить с целью улучшения качества созданного приложения
при клике по надписи ru англоязычная страница переводится на русский язык +10
при клике по надписи en русскоязычная страница переводится на английский язык +10
надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5
Переключение светлой и тёмной темы +25
Внешний вид тёмной темы соответствует макету, который верстали в предыдущих частях задания, внешний вид светлой темы соответствует одному из двух вариантов макетов на выбор. Баллы за оба варианта одинаковые, выбирайте тот, который больше нравится.
Вариант первый. Блоки и секции header, hero, contacts, footer остались без изменений, в оставшихся секциях цвет фона и шрифта поменялись местами: фон стал белым, шрифт черным Макет в figma - светлая тема - 1
Вариант второй. Изменения затронули все блоки и секции, в том числе поменялись фоновые изображения и есть два варианта меню на выбор Макет в figma - светлая тема - 2
На страницу добавлен переключатель при клике по которому:
тёмная тема приложения сменяется светлой +10
светлая тема приложения сменяется тёмной +10
после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5
Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
`);