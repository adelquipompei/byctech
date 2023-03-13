$(document).ready(function() {
	var altura = $('nav').offset().top;
	$('.parallax-mirror').css('top', '-85px');
	$('#menpro').removeClass('bg-tech');
	$('#menpro').addClass('bg-tech-blur');
	$('#menpro').removeClass('bg-light-blur');
	$('#menpro').addClass('bg-tech-blur');

	var windoWidth = $(window).width();
	if (windoWidth < 800){		
			
			$('nav').removeClass('bg-transparent');
			$('nav').addClass('bg-light');
			$('nav').addClass('shadow');
			$('nav').removeClass('nav-25');
			$('.nav-link').css('color', 'black')
			$('a').removeClass('text-white');
			$('.dropdown-item').css('color', 'black')
			$('.navbar-brand').css('color', 'black');

			

}

	$(window).on('scroll', function(){
	var windoWidth = $(window).width();
	if (windoWidth > 800){		

			if ($(window).scrollTop() > 60){
			$('#menpro').removeClass('bg-tech-blur');
			$('#menpro').addClass('bg-light-blur');
			$('#font > a').removeClass('text-white');	
			$('#font > a').addClass('link-tech');
			
			$('#slider').addClass('slider-nav-dark')

			$('nav').removeClass('bg-transparent');
			$('nav').addClass('bg-light');
			$('nav').addClass('shadow');
			$('nav').removeClass('nav-25');
			$('.nav-link').css('color', 'black')
			$('a').removeClass('text-white');
			$('.dropdown-item').css('color', 'black')
			$('.navbar-brand').css('color', 'black');
			
		}
		else {
			$('#menpro').addClass('bg-tech-blur');
			$('#menpro').removeClass('bg-light-blur');

			$('#slider').removeClass('slider-nav-dark')
			$('#font > a').addClass('text-white');
			$('#font > a').removeClass('link-tech');
			$('#ff > a').removeClass('text-white');
			$('nav').removeClass('bg-light');
			$('nav').addClass('bg-transparent');
			$('nav').addClass('nav-25');
			$('nav').removeClass('shadow')
			$('.nav-link').css('color', 'white')
			$('.navbar-brand').css('color', 'white');
			$('.dropdown-item').css('color', 'black')
			
			}	


}

else{
	$('nav').removeClass('bg-transparent');
			$('nav').addClass('bg-light');
			$('nav').addClass('shadow');
			$('nav').removeClass('nav-25');
			$('.nav-link').css('color', 'black');
			$('a').removeClass('text-white');
			$('.dropdown-item').css('color', 'black')
			$('.navbar-brand').css('color', 'black');
}



			
	})
			


	




})
