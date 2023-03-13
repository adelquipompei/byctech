$(document).ready(function() {
    var windoWidth = $(window).width();
    if (windoWidth > 1400) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 890) {
                $('#caja').show(function() {
                    $('#caja').removeClass('animate__animated animate__fadeOutUpBig');
                    $('#caja').addClass('animate__animated animate__fadeInDownBig');
                });
            } else {
                $('#hand').hide();
                $('#caja').removeClass('animate__animated animate__fadeInDownBig');
                $('#caja').addClass('animate__animated animate__fadeOutUpBig');
            }
            if ($(this).scrollTop() > 1100) {
                $('#hand').show(function() {
                    $('#hand').removeClass('animate__animated animate__bounceOut');
                    $('#hand').addClass('animate__animated animate__bounceIn');
                });
            } else {
                $('#hand').removeClass('animate__animated animate__bounceIn');
                $('#hand').addClass('animate__animated animate__bounceOut');
            }
            if ($(this).scrollTop() >= 3688) {
                $('#hand').show(function() {
                    $('#hand').removeClass('animate__animated animate__bounceIn');
                    $('#hand').addClass('animate__animated animate__pulse');
                    $('.llamanos').css('transition', '.5s');
                    $('.llamanos').removeClass('shadow');
                });
                /**/
                /**/
            } else if ($(this).scrollTop() < 3700) {
                $('#hand').show(function() {
                    $('#hand').removeClass('animate__animated animate__swing');
                    $('#hand').addClass('animate__animated animate__bounceIn');
                    $('.llamanos').css('transition', '.1s');
                    $('.llamanos').addClass('shadow')
                })
            }
        })
    }
    /*	var proyectos = $('#proyectos');

    	proyectos.on('mouseenter',function(){
    		$('.menu-proyectos').slideDown();
    		$('nav').removeClass('shadow');
    		
    	})
    	$('.menu-proyectos').on('mouseleave', function(){
    		$('.menu-proyectos').slideUp(function(){
    			$('nav').addClass('shadow');
    		});
    		
    		
    	})
    */
})