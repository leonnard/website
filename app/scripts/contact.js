var $ = require('jquery');
var $contactForm = $('#contact-form');
var $sendBtn = $('#contact-form button.btn');

function init(){
  $contactForm.on('submit', submit);
}

function submit(e) {
  e.preventDefault();

  $sendBtn.addClass('is-loading');

  $.ajax({
    type: 'POST',
    url: $(this).attr('action'),
    data: {
      name: 'wbkd',
      email: $('.email-field').val(),
      subject: 'wbkd',
      message: $contactForm.find('textarea').val()
    },
    success: function(data) {
      $sendBtn.removeClass('is-loading');
      var data = JSON.parse(data);

      $('.msg-error,.msg-success').hide();

      if (data.invalid) {
        $('.msg-error').fadeIn(600).css('display', 'inline').delay(3500).fadeOut(400);
      } else {
        $('#contact-form').find('input, textarea').val('');
        $('.msg-success').fadeIn(600).css('display', 'inline').delay(3500).fadeOut(400);
      }

    },
    error: function() {
      $sendBtn.removeClass('is-loading');
    }
  });
}


module.exports = {
  init : init
}

