
          // Ocultar la barra de carga cuando la página haya terminado de cargarse
          window.onload = function() {
               document.getElementById("a").style.width = "100%";
               setTimeout(function() {
                    $('.a').fadeOut();
               }, 500);
          };
    