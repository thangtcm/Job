
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

$(document).ready(function () {
	var trigger = $('.hamburger'),
		overlay = $('.overlay'),
	   isClosed = false;
  
	  trigger.click(function () {
		hamburger_cross();      
	  });
  
	  function hamburger_cross() {
  
		if (isClosed == true) {          
		  overlay.hide();
		  trigger.removeClass('is-open');
		  trigger.addClass('is-closed');
		  isClosed = false;
		} else {   
		  overlay.show();
		  trigger.removeClass('is-closed');
		  trigger.addClass('is-open');
		  isClosed = true;
		}
	}
	
	$('[data-toggle="offcanvas"]').click(function () {
		  $('#wrapper').toggleClass('toggled');
	});  
  });

  $(document).ready(function() {
	$('input').tagsinput({
		template: '<span class="tag badge badge-info"><span data-role="remove"></span></span>'
	});
});