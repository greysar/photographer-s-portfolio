const langsObj = {
  'en': {
    'lang-skills': 'Skills',
    'lang-portfolio': 'Portfolio',
    'lang-video': 'Video',
    'lang-price': 'Price',
    'lang-contacts': 'Contacts',
    'lang-hero-title': 'Alexa Rise',
    'lang-hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'lang-hire': 'Hire me',
    'lang-skill-title-1': 'Digital photography',
    'lang-skill-text-1': 'High-quality photos in the studio and on the nature',
    'lang-skill-title-2': 'Video shooting',
    'lang-skill-text-2': 'Capture your moments so that they always stay with you',
    'lang-skill-title-3': 'Retouch',
    'lang-skill-text-3': 'I strive to make photography surpass reality',
    'lang-skill-title-4': 'Audio',
    'lang-skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'lang-winter': 'Winter',
    'lang-spring': 'Spring',
    'lang-summer': 'Summer',
    'lang-autumn': 'Autumn',
    'lang-price-description-1-span-1': 'One location',
    'lang-price-description-1-span-2': '120 photos in color',
    'lang-price-description-1-span-3': '12 photos in retouch',
    'lang-price-description-1-span-4': 'Readiness 2-3 weeks',
    'lang-price-description-1-span-5': 'Make up, visage',
    'lang-price-description-2-span-1': 'One or two locations',
    'lang-price-description-2-span-2': '200 photos in color',
    'lang-price-description-2-span-3': '20 photos in retouch',
    'lang-price-description-2-span-4': 'Readiness 1-2 weeks',
    'lang-price-description-2-span-5': 'Make up, visage',
    'lang-price-description-3-span-1': 'Three locations or more',
    'lang-price-description-3-span-2': '300 photos in color',
    'lang-price-description-3-span-3': '50 photos in retouch',
    'lang-price-description-3-span-4': 'Readiness 1 week',
    'lang-price-description-3-span-5': 'Make up, visage, hairstyle',
    'lang-order': 'Order shooting',
    'lang-contact-me': 'Contact me',
    'lang-mail-form': 'E-mail',
    'lang-phone-form': 'Phone',
    'lang-message-form': 'Message',
    'lang-send-message': 'Send message'
  },
  'ru': {
    'lang-skills': 'Навыки',
    'lang-portfolio': 'Портфолио',
    'lang-video': 'Видео',
    'lang-price': 'Цены',
    'lang-contacts': 'Контакты',
    'lang-hero-title': 'Алекса Райс',
    'lang-hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'lang-hire': 'Пригласить',
    'lang-skill-title-1': 'Фотография',
    'lang-skill-text-1': 'Высококачественные фото в студии и на природе',
    'lang-skill-title-2': 'Видеосъемка',
    'lang-skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'lang-skill-title-3': 'Ретушь',
    'lang-skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'lang-skill-title-4': 'Звук',
    'lang-skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'lang-winter': 'Зима',
    'lang-spring': 'Весна',
    'lang-summer': 'Лето',
    'lang-autumn': 'Осень',
    'lang-price-description-1-span-1': 'Одна локация',
    'lang-price-description-1-span-2': '120 цветных фото',
    'lang-price-description-1-span-3': '12 отретушированных фото',
    'lang-price-description-1-span-4': 'Готовность через 2-3 недели',
    'lang-price-description-1-span-5': 'Макияж, визаж',
    'lang-price-description-2-span-1': 'Одна-две локации',
    'lang-price-description-2-span-2': '200 цветных фото',
    'lang-price-description-2-span-3': '20 отретушированных фото',
    'lang-price-description-2-span-4': 'Готовность через 1-2 недели',
    'lang-price-description-2-span-5': 'Макияж, визаж',
    'lang-price-description-3-span-1': 'Три локации и больше',
    'lang-price-description-3-span-2': '300 цветных фото',
    'lang-price-description-3-span-3': '50 отретушированных фото',
    'lang-price-description-3-span-4': 'Готовность через 1 неделю',
    'lang-price-description-3-span-5': 'Макияж, визаж, прическа',
    'lang-order': 'Заказать съемку',
    'lang-contact-me': 'Свяжитесь со мной',
    'lang-mail-form': 'Почта',
    'lang-phone-form': 'Телефон',
    'lang-message-form': 'Cообщение',
    'lang-send-message': 'Отправить'
  }
}

let langWrapper = document.querySelector('.lang-switch');

let changeLang = lang => {
  for (let key in langsObj) {
    if (key == lang) {
      if (lang == 'ru') {
        document.querySelector('.hero__author-name').classList.add('lang-ru-h1');
        Array.from(document.querySelectorAll('.nav__link')).forEach(item => {
          item.classList.add('lang-ru');
        });
      } else {
        document.querySelector('.hero__author-name').classList.remove('lang-ru-h1');
        Array.from(document.querySelectorAll('.nav__link')).forEach(item => {
          item.classList.remove('lang-ru');
        });
      }
      for (let classItem in langsObj[key]) {
        if (document.querySelectorAll(`.${classItem}`).length > 0) {
          Array.from(document.querySelectorAll(`.${classItem}`)).forEach(item => {
            item.textContent = langsObj[key][classItem];
          })
        }
        if (document.querySelector(`.${classItem}`).tagName.toLowerCase() == 'input' ||
          document.querySelector(`.${classItem}`).tagName.toLowerCase() == 'textarea') {
          document.querySelector(`.${classItem}`).setAttribute('placeholder', langsObj[key][classItem]);
          document.querySelector(`.${classItem}`).textContent = null;
        } else {
          document.querySelector(`.${classItem}`).textContent = langsObj[key][classItem];
        }
      }
      Array.from(langWrapper.children).forEach(item => {
        if (item.textContent.toLowerCase() == lang) item.classList.add('lang__item_current');
      });
    }
  }
}

changeLang(localStorage.LSPageLang || 'en');

Array.from(langWrapper.children).forEach(langItem => {
  if (langItem.textContent.toLowerCase() == 'en' || langItem.textContent.toLowerCase() == 'ru') {
    langItem.addEventListener('click', (e) => {
      Array.from(langWrapper.children).forEach(item => {
        item.classList.remove('lang__item_current');
      });
      langItem.classList.add('lang__item_current');
      changeLang(langItem.textContent.toLowerCase());
      currentOptions['pageLang'] = langItem.textContent.toLowerCase();
      localStorage.setItem('LSPageLang', currentOptions['pageLang']);
    })
  }
});