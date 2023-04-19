<?php include("../php/conexion.php");





$usuario=array("email"=>$_POST['userName'],"password" => $_POST['pass']);




$sql="SELECT * FROM users";

$result=mysqli_query($conn,$sql);

$fila=mysqli_fetch_assoc($result);



if (($fila['email'] == $usuario['email'] && $fila['password'] == $usuario['password'])) {
		session_start();
		$_SESSION['username'] = $usuario;
		header("location:..\adminhub\index.php?page=dash");
		mysqli_close($conn);
		
}else{
	echo "Usuario o contrasela incorrecto!";
}









echo "<br><br>	";

 $close= mysqli_close($conn);

 if($close){
 	echo "Conexion cerrada!";
 }

 ?>