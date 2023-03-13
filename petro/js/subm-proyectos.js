var windoWidth = $(window).width();
  if (windoWidth > 800){

    var proyectos = $('#proyectos');
  $('#folder').removeClass('icon-folder-open'); 
  $('#folder').addClass('icon-folder');
  $(window).on('scroll',function(){
    if($(window).scrollTop() > 5){
      $('.menu-proyectos').fadeOut();
      $('#folder').removeClass('icon-folder-open1');
      $('#folder').addClass('icon-folder');
    }
  })
  proyectos.on('mouseenter',function(){
    
    $('#folder').removeClass('icon-folder');
    $('#folder').addClass('icon-folder-open1');
    $('.menu-proyectos').slideDown(function(){
    });
    /*$('nav').removeClass('shadow');*/
    
  })
  $('.menu-proyectos').on('mouseleave', function(){
    $('#folder').removeClass('icon-folder-open1');
    $('#folder').addClass('icon-folder');
    $('.menu-proyectos').slideUp();
    
    
  }) 




}