<?php $conn = mysqli_connect('localhost','root', '', 'loginbyc'); 

if($conn){
	echo "Conectado!!";
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
		echo "correcto";
		break;
	
	case false:
		echo "incorrecto";
		break;
}








 ?>