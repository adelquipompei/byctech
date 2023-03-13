var windoWidth = $(window).width();
  if (windoWidth > 800){

    var proyectos = $('#proyectos');
  $('#folder').removeClass('icon-folder-open'); 
  $('#folder').addClass('icon-folder');

  proyectos.on('mouseenter',function(){
    
    $('#folder').removeClass('icon-folder');
    $('#folder').addClass('icon-folder-open1');
    $('.menu-proyectos').show();
    
    /*$('nav').removeClass('shadow');*/
    
  })
  $('.menu-proyectos').on('mouseleave', function(){
    
    $('.menu-proyectos').slideUp(200,function(){
      $('#folder').removeClass('icon-folder-open1');
      $('#folder').addClass('icon-folder');
      $('.miniPro').animate({width: '0%'},200);
    });
    
    
  }) 




}