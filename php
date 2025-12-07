<?php
$servername = "localhost";
$username = "Adrian"; // Reemplaza con tu usuario de MySQL
$password = "tu_contraseña"; // Reemplaza con tu contraseña de MySQL
$dbname = "foro_simple";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>