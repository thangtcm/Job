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


//Filter
$(document).on('click', '#filter_search', function() {
	$('#filter_inputs').slideToggle("slow");
});

// Checkbox Select
	
$('.app-listing .selectbox').on("click", function() {
	$(this).parent().find('#checkboxes').fadeToggle();
	$(this).parent().parent().siblings().find('#checkboxes').fadeOut();
});

//Checkbox Select
	
if($('.sortby').length > 0) {
	var show = true;
	var checkbox1 = document.getElementById("checkbox");
	$('.selectboxes').on("click", function() {
		
		if (show) {
			checkbox1.style.display = "block";
			show = false;
		} else {
			checkbox1.style.display = "none";
			show = true;
		}
	});		
}