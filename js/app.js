$(document).ready(function(){
	$(window).height(window.innerHeight);
	//$('section').width(window.innerWidth);

	$('.index').on('click', function(){
		if($(this).hasClass('colored')){
			return false;
		}

		$('.index').removeClass('colored');
		$(this).addClass('colored');

	});



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
	function activateImg(imageName){
		$('.phoneWrapper img').removeClass('active');
		$('.phoneWrapper .'+imageName).addClass('active');
	};
	
	$(window).on('scroll', function(){

		var bounce = $("#bouncedArrow");
  		
  		if($(this).scrollTop() > 0.5 ){
    		$(bounce).hide(1500);
  		} else {
    		$(bounce).show(260);
  		}

		var scrollProgress = window.pageYOffset;
		 console.log(scrollProgress);

		// var p = $( "p:first" );
		// $( "p:last" ).text( "scrollTop:" + p.scrollTop() );
		var newW = $('.newWrapper').offset().top - (window.innerHeight/2);
		var map = $('#map').offset().top- (window.innerHeight/2);
		var aboutUs = $('#aboutUs').offset().top- (window.innerHeight/2);
		var contact = $('#contact').offset().top- (window.innerHeight/2);
		var footer = $('#footer').offset().top- (window.innerHeight/2);
	
		//console.log(scrollProgress);
		
		if(scrollProgress < newW){
			activateImg('homeImg');
		}else if( scrollProgress < map){
			activateImg('newImg');
		}else if(scrollProgress < aboutUs){
			activateImg('mapImg');
		}else if(scrollProgress < contact){
			activateImg('aboutImg');
		}else if(scrollProgress < footer){
			activateImg('contactImg');
		}else if(scrollProgress > footer){
			activateImg('waitingImg');
		}
	});
});


