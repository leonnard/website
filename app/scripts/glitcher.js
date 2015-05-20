var init = function(domEl) {
  var canvas = domEl || document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    img = new Image(),
    w, h, offset, glitchInterval,
    glitchTimeout, glitching = false;

  img.src = 'images/logo-200.png';

  img.onload = function() {
    init();
    window.onresize = init;
  };

  var init = function() {
    clear();
    var w = img.width;
    offset = 20;
    canvas.width = w;
    canvas.width += offset * 2;

    canvas.height = h = img.height; //~~(100 * ((w - (offset * 2)) / img.width));
    context.drawImage(img, 0, 0, img.width, img.height, offset, 0, img.width, img.height);
  };

  var clear = function() {
    context.fillStyle = '#fefefe';
    context.fillRect(0, 0, canvas.width, h);
  };

  var glitchImg = function() {
    if (glitching)
      for (var i = 0; i < randInt(2, 8); i++) {
        var x = Math.random() * 3.5;
        x = x * x - 6;
        var y = Math.random() * canvas.height;
        var spliceWidth = canvas.width - x;
        var spliceHeight = randInt(5, img.height / 3);
        context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
        context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
      }
  };

  var randInt = function(a, b) {
    return~~ (Math.random() * (b - a) + a);
  };
  var start = function() {
    glitching = true;
    (function timeOutLoop() {
      clear();
      context.drawImage(img, 0, 0, img.width, img.height, offset, 0, img.width, img.height);
      glitchTimeout = setTimeout(glitchImg, randInt(1, 400));
      glitchInterval = setTimeout(timeOutLoop, 100);
    }());
  }
  var end = function() {
    glitching = false;
    clearTimeout(glitchInterval);
    clearTimeout(glitchTimeout);
    clear();
    context.drawImage(img, 0, 0, img.width, img.height, offset, 0, img.width, img.height);
  }
  canvas.addEventListener('mouseenter', function() {
    start();
  });
  canvas.addEventListener('mouseout', function() {
    end();
  });
};

module.exports = {
  init : init
}
