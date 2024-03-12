'use strict'

let mainStyle = document.querySelector('.main-styles');
let themeSwitcher = document.querySelector('.theme-switcher');
let themes = {
    'dark': 'darkTheme.css',
    'light': 'lightTheme.css'
};

let getTheme = theme => {
    mainStyle.setAttribute('href', theme);
    currentOptions['colorTheme'] = theme;
    return localStorage.setItem('LSPageTheme', theme);
};

themeSwitcher.addEventListener('click', () => {
    (mainStyle.getAttribute('href') == themes['dark']) ?
        getTheme(themes['light']) :
        getTheme(themes['dark']);
});

getTheme(localStorage['LSPageTheme'] ?? themes['dark']);