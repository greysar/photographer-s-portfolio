'use strict'

let galery = document.querySelector('.galery');
let portfolioNav = document.querySelector('.portfolio-nav');
let portfolioBtnActive;
let getSeason = (month) => {
    if (month >= 0 && month < 2 || month == 11) return 'Winter';
    if (month >= 2 && month < 5) return 'Spring';
    if (month >= 5 && month < 8) return 'Summer';
    if (month >= 8 && month < 11) return 'Autumn';
};
let season = getSeason(new Date().getMonth()) ?? 'Autumn';

Array.from(portfolioNav.children).forEach(item => {
    if (item.getAttribute('id') == season) {
        item.classList.toggle('portfolio-nav__button_active');
        portfolioBtnActive = item;
    }

    item.addEventListener('click', (e) => {
        portfolioBtnActive.classList.remove('portfolio-nav__button_active');
        portfolioBtnActive = e.target;
        portfolioBtnActive.classList.toggle('portfolio-nav__button_active');
        season = e.target.getAttribute('id');
        getSeasonPics(season);
    });
});

getSeasonPics(season);

function getSeasonPics(season) {
    Array.from(galery.children).forEach((item, i) => {
        item.setAttribute('src', `assets/img/${season.toLowerCase()}/${i + 1}.jpg`)
    });
}