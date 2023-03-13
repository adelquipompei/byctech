<?php include("templates/head.php");   ?>
<title>Formulario</title>
</head>

<body  style="font-family: ubuntu;font-weight: 400;;background: url(img/contacto.jpg); background-size: cover;background-attachment: fixed;">


<!-------------------NAV-------------------------------------------------------------------------------------------->





<?php include("templates/nav.php");   ?>

<?php include("templates/menu-proyectos.php"); ?>  




<!---------------------------------------------FORMULARIO------------------------------------------------------>




<section>
    <main class="container">
          <div class="p-4 animate__animated animate__backInRight shadow-lg row" style="background: #fff; border-radius: 10px;z-index: 3;">
                  <div class="col-md-6" >
                      <form action="enviar.php" method="POST" class="needs-validation" novalidate>
                            <div class="form-group ">
                                  <label for="nombre" class="form-label">Nombre</label>
                                  <input type="text" class="form-control" placeholder="Nombre" name="nombre" id="nombre" required>
                                  <div class="valid-feedback">Ok!</div>
                                  <div class="invalid-feedback">Por favor complete el campo</div>
                            </div>

                            <div class="form-group pt-3">
                              <label for="telefono" class="form-label" >Telefono</label>
                              <input type="text" class="form-control" placeholder="Telefono" name="telefono" id="telefono">
                            </div>

                            <div class="form-group pt-3">
                              <label for="email">Email</label>
                              <input type="email" class="form-control" placeholder="Email" name="email" id="email" required>
                              <div class="valid-feedback">Ok!</div>
                              <div class="invalid-feedback">Por favor complete el campo</div>
                            </div>
                            <div class="form-group pt-3">
                              <label for="mensaje">Mensaje</label>
                              <textarea name="mensaje" id="mensaje" class="form-control" cols="30" rows="10" required></textarea>
                              <div class="valid-feedback">Ok!</div>
                              <div class="invalid-feedback">Por favor complete el campo</div>
                            </div>
                            <div class="pt-3">
                            <button type="submit" value="enviar" class="btn btn-primary">Enviar</button>
                            </div>
                      </form>
                </div>


<!----------------------------------------MAPA------------------------------------------------------------------->
          


          <div class="col-md-6 p-4">
             <iframe style="border-radius: 10px;" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45939.435867957196!2d-61.94872684558499!3d-33.75379882577248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1624162614318!5m2!1ses-419!2sar" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

          </div>

          </div>
<!--------------------------------------------REDES--------------------------------------->



          <div class="m-5 shadow p-4 animate__animated animate__zoomInDown animate__delay-1s  d-flex justify-content-around align-items-center" style="background: #fff; border-radius: 10px;">
            <a href="http://wa.link/shfn34" class="icon-whatsapp link-tech d-flex flex-row"  style="font-size: 35px;"></a><h3 class=" h5 bd-callout px-2  d-none d-xl-flex"><a class="link-tech" href="http://wa.link/shfn34">+5493462555395</a></h3>
            <a href="https://www.instagram.com/byc.tech/" class="icon-instagram link-tech d-flex flex-row" style="font-size: 41px;" ></a><h3 class=" h5 bd-callout px-2 d-none d-xl-flex"><a class="link-tech" href="https://www.instagram.com/byc.tech">instagram.com/byc.tech</a></h3>
            <a href="https://www.linkedin.com/company/byctech" class="icon-linkedin2 link-tech d-flex flex-row" style="font-size: 35px;" ></a><h3 class=" h5 bd-callout px-2 d-none d-xl-flex"><a class="link-tech" href="https://www.linkedin.com/company/byctech">linkedin.com/company/byctech</a></h3>
          </div>



      

    </main>
</section>	















<?php include("templates/footer.php");   ?>








<?php include("templates/scripts.php");   ?>
</body>
</html>	