// Testimonials Slider
$(document).ready(function () {
  $('.testimonials_slider').slick({
    arrows: false,
    dots: true
  });
});

// Top Slider

$(document).ready(function () {
  $('.homeslider').slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`
  });
});


$(document).ready(function () {
  $('.mobile_nav .open').on('click', function () {
    if ($(this).text() == 'Open Menu') {
      $('ul.mobile').show();

      $(this).text('Close Menu');
    } else {
      $('ul.mobile').hide();
      $(this).text('Open Menu');
    }
  });
});