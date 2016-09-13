$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1950, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	//var height = $(window).height();
	//var width = $(window).width();

	$(window).on('scroll', function(){

		var bounce = $("#bouncedArrow");
  		
  		if($(this).scrollTop() > 0.5 ){
    		$(bounce).hide(1500);
  		} else {
    		$(bounce).show(260);
  		}

	});
});


