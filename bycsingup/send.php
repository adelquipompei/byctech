<?php 

include ("database.php");

$email = $_POST['email'];

$password = $_POST['password'];

$insert = "INSERT INTO users (email, password) values ('".$email."','".$password."')"; 

mysqli_query($conn, $insert);

mysqli_close($conn);





?>