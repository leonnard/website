var jQuery = require('jquery');

var nav = (function($, window, document) {

  var $mobileNav = $('.mobile-nav'),
      $navItems = $('.navigation li, .mobile-nav li');

  var toggle = function() {
    $mobileNav.toggleClass('active');
  }

  var close = function() {
    $mobileNav.removeClass('active');
  }

  var onClick = function(evt) {
    evt.stopPropagation();
    navClicked = true;
    var $this = $(this);
    var selector = $this.attr('data-href');
    activeCategory = selector;
    $navItems.removeClass('active');
    $this.addClass('active');

    var href = $this.attr('data-href');
    if(typeof href !== 'undefined') {
      scrollTo('section.' + selector);
    }
    window.setTimeout(close, 250);
  }

  function scrollTo(selector) {
    var elTop = $(selector).offset().top;

    $('html,body').animate({
      scrollTop: elTop - 48
    }, 500, function() {
      navClicked = false;
    });
  }

  function scrollToStart() {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  }

  var sectionOffsets = [];

  $('section').each(function(i, el) {
    var $el = $(el);
    sectionOffsets.push([$el.attr('class'), $el.offset().top - 50])
  });

  var activeCategory = undefined;
  var navClicked = false;

  var onScroll = function() {
    if(navClicked) return;
    var scrollPos = $(window).scrollTop();
    for(var i = 0; i < sectionOffsets.length - 1; i++) {
      var check = sectionOffsets[i];
      if(scrollPos < sectionOffsets[i+1][1] && scrollPos >= check[1] && check[0] !== activeCategory) {
        setActive(check[0]);
        return;
      }
    }
  }

  function setActive(selector) {
    var $this = $('.navigation li[data-href=' + selector + ']');
    $navItems.removeClass('active');
    $this.addClass('active');
    activeCategory = selector;
  }

  return {
    toggle : toggle,
    close : close,
    onClick : onClick,
    onScroll : onScroll,
    scrollToStart : scrollToStart
  }

})(jQuery, window, document);

module.exports = nav;