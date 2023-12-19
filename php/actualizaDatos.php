<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];
	$n=$_POST['nombre'];
	$t=$_POST['tipo'];

	$sql="UPDATE t_fruta set nombre='$n',
								tipo='$t',
				where id='$id'";
	echo $result=mysqli_query($conexion,$sql);

 ?>