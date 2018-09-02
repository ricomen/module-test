'use strict';

import 'js-custom-scroll';

new jsCustomScroll(document.querySelector('.js-custom-scroll'));

const menu = document.querySelectorAll('.js-menu__item');

for ( let i = 0; i < menu.length; i++ ) {    
    menu[i].addEventListener('click', function() {
        this.classList.toggle("is-active");
    })
}

// import slick from 'slick-carousel'

/**
 * Slick-slider
**/
// $('.slider__list').slick({

// });