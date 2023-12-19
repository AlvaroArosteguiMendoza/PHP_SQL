<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$n=$_POST['nombre'];
	$t=$_POST['tipo'];

	$sql="INSERT into t_fruta (nombre,tipo)
								values ('$n','$t')";
	echo $result=mysqli_query($conexion,$sql);

 ?>