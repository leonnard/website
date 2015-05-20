var jQuery = require('jquery');

var projects = (function($, window, document) {

  var $projectImages = $('.project-image');

  var init = function() {
    setBackgroundImages();
  }

  function setBackgroundImages() {
    $projectImages.each(function(i, projectImage) {
      var $projectImage = $(projectImage);
      $projectImage.css('background-image', 'url(' + $projectImage.attr('data-thumb') + ')');
    });
  }

  return {
    init : init
  }

})(jQuery, window, document);

module.exports = projects;