<?php include("../php/conexion.php");


if($conn){
	echo "Conexion con la base de datos: OK!";
}



$usuario=array("email"=>$_POST['userName'],"password" => $_POST['pass']);

echo "<pre>";

print_r($usuario);


$sql="SELECT * FROM users";

$result=mysqli_query($conn,$sql);

$fila=mysqli_fetch_assoc($result);

echo "<pre>";





switch ($fila['email'] == $usuario['email'] && $fila['password'] == $usuario['password']) {
	case true:
		session_start();
		$_SESSION['username'] = $usuario;
		header("location:..\adminhub\index.php?page=dash");
		mysqli_close($conn);

		break;
	
	case false:
		
		echo "Usuario o contraseña incorrecto";
		break;
}




echo "<br><br>	";

 $close= mysqli_close($conn);

 if($close){
 	echo "Conexion cerrada!";
 }

 ?>