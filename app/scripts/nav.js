var $ = require('jquery');
var $navItems = $('.navigation li');


function init(){
  $navItems.on('click', _onClick);
}

function _onClick(evt) {
  evt.stopPropagation();

  var selector = $(this).attr('data-href');

  if(typeof selector !== 'undefined') {
    _scrollTo('section.' + selector);
  }
}

function _scrollTo(selector) {
  var elTop = $(selector).offset().top;

  $('html, body').animate({
    scrollTop: elTop
  }, 500);
}


module.exports = {
  init : init
};