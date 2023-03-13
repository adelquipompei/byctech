
$(document).ready(function() {
	var altura = $('nav').offset().top;
	$('.parallax-mirror').css('top', '-85px');

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
			$('#menpro').removeClass('bg-black-blur');
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
			$('#menpro').addClass('bg-black-blur')
			$('#menpro').removeClass('bg-light-blur');
			$('#slider').removeClass('slider-nav-dark')
			$('#font > a').addClass('text-white');
			$('#font > a').removeClass('link-tech');
			$('#ff > a').removeClass('text-white');
			$('nav').removeClass('bg-light');
			$('nav').addClass('bg-transparentt');
			$('nav').addClass('nav-25');
			$('nav').removeClass('shadow')
			$('.nav-link').css('color', 'white')
			$('.navbar-brand').css('color', 'white');
			$('.dropdown-item').css('color', 'black')
			
			}	


}

else{
	$('nav').removeClass('bg-transparentt');
			$('nav').addClass('bg-light');
			$('nav').addClass('shadow');
			$('nav').removeClass('nav-25');
			$('.nav-link').css('color', 'black');
			$('a').removeClass('text-white');
			$('.dropdown-item').css('color', 'black')
			$('.navbar-brand').css('color', 'black');
}



			
	})
			


	
/*Submenu PROYECTOS */

var windoWidth = $(window).width();
	if (windoWidth > 800){

		var proyectos = $('#proyectos');
	$('#folder').removeClass('icon-folder-open');	
	$('#folder').addClass('icon-folder');
	$(window).on('scroll',function(){
		
	})
	proyectos.on('mouseenter',function(){
		
		$('#folder').removeClass('icon-folder');
		$('#folder').addClass('icon-folder-open1');
		$('.menu-proyectos').show();
		/*$('nav').removeClass('shadow');*/
		
	})
	$('.menu-proyectos').on('mouseleave', function(){
		$('#folder').removeClass('icon-folder-open1');
		$('#folder').addClass('icon-folder');
		$('.menu-proyectos').slideUp();
		
		
	}) 




}

	




			
	


			
			




			
			


			


		
			

			
})