$(document).ready(function(){
var windoWidth = $(window).width();
	if (windoWidth > 800){
		$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 100);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}

	});
	}
	

});





