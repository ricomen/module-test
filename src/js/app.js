'use strict';
import './closest-polyfill';
import 'js-custom-scroll';

/**
 *  Custom scroll
 **/
new jsCustomScroll(document.querySelector('.js-custom-scroll'));

/** 
 *  Header menu
 * */
const menu = document.querySelectorAll('.js-menu__item a');
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function () {
    this.closest('.js-menu__item').classList.toggle("is-open");
    this.closest('.js-menu__item').hasAttribute('data-order') ? loadOrderModule('order') : null;
  })
}
document.querySelector('.menu__panel-close').addEventListener('click', function() {
  this.closest('.menu__item').classList.remove('is-open');
})

/**
 * load order module
 * */
function loadOrderModule() {
  require.ensure(['./order'], function(require){
    let module = require('./order');
    module();
  })
}

/**
* Search
**/
const search = document.querySelector('.search__field input');

search.addEventListener('focus', function() {
	this.closest('.search').classList.add('is-active');
})
search.addEventListener('blur', function() {
	this.closest('.search').classList.remove('is-active');
})