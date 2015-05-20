var jQuery = require('jquery');


var contact = (function($, window, document) {

  var $contactForm = $('#contact-form'),
      $emailField = $('#contact-form .email-field'),
      $msgField = $('#contact-form .msg-area'),
      $sendBtn = $('#contact-form button.btn');

  var submit = function(e) {
    e.preventDefault();

    $sendBtn.addClass('is-loading');

    $.ajax({
      type: "POST",
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

  var activate = function() {
    $contactForm.addClass('active');
  }

  var leave = function(evt) {
    var hasContent = false;

    $contactForm.find('input, textarea').each(function(i, el) {
      if ($(el).val()) {
        hasContent = true;
      }
    });

    if (evt.relatedTarget && (evt.relatedTarget.className === 'email-field' || evt.relatedTarget.className === 'btn')) hasContent = true;

    if (!hasContent) {
      $contactForm.removeClass('active');
    }
  }

  module.exports = {
    activate : activate,
    leave : leave,
    submit : submit
  }

})(jQuery, window, document);