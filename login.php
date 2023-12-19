<?php
session_start();

if(isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if($username === 'usuario' && $password === 'contraseña') {
        header("Location: index.php");
        exit();
    } else {
        echo "Credenciales incorrectas. Por favor, intenta de nuevo.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

    <form method="POST" action="">
        <label for="username">Usuario:</label><br>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Contraseña:</label><br>
        <input type="password" id="password" name="password"><br><br>

        <input type="submit" value="Iniciar sesión">
    </form>

</body>
</html>
