
<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];

	$sql="DELETE from t_fruta where id='$id'";
	echo $result=mysqli_query($conexion,$sql);
 ?>