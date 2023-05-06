$(function() {
    $('.slimscroll').slimScroll({
      height: '250px', // chiều cao của thanh cuộn
      railVisible: true // hiển thị thanh kéo
    });
  });


// Sticky Navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
  } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
  }
});


// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});