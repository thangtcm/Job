
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

CKEDITOR.replace('editor1'); // Khởi tạo bảng soạn nội dung CKEditor

$(document).ready(function() {
    $('#citySelect').select2();
});

$(document).ready(function() {
    $('#experience').select2();
});


fetch('https://provinces.open-api.vn/api/?depth=1')
    .then(response => response.json())
    .then(data => {
      // Lặp qua danh sách các tỉnh/thành phố và thêm các tùy chọn vào trong trường chọn HTML
      data.forEach(city => {
        const option = document.createElement('option');
        option.value = city.code; // Truy xuất thuộc tính "code" của đối tượng JSON
        option.text = city.name; // Truy xuất thuộc tính "name" của đối tượng JSON
        document.getElementById('citySelect').appendChild(option);
      });
    })
    .catch(error => console.error(error));