<?php include("conexion.php");

$sql = "SELECT * FROM proyectos order by id desc";

$result = mysqli_query($conn, $sql);

while ($fila = mysqli_fetch_assoc($result)){} ?>


	

			

           
