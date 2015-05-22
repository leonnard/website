var $ = require('jquery');
var utils = require('./utils');
var nav = require('./nav');
var contact = require('./contact');
//var glitcher = require('./glitcher');

//glitcher.init(document.getElementById('canvas'));

(function initEvents(window, document, $) {
  $('.nav-toggle').on(utils.click, nav.toggle);
  $('.nav-close').on(utils.click, nav.close);
  $('nav > .navigation li, .mobile-nav li').on(utils.click, nav.onClick);
  $('nav > .logo').on(utils.click, nav.scrollToStart);
  $(window).on('scroll', nav.onScroll);

  $('#contact-form').on('submit', contact.submit);
  $('#contact-form textarea').on('focus', contact.activate);
  $('#contact-form textarea').on('blur', contact.leave);
})(window, document, $);