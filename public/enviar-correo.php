<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$_POST = json_decode($rest_json, true);

echo "test";

if (empty($_POST["name"]) || empty($_POST["phone"]) || empty($_POST["email"]) || empty($_POST["message"])) die();

$destino = "info@grupovivienda.com";
$nombre = $_POST["name"];
$telefono = $_POST["phone"];
$correo = $_POST["email"];
$mensaje = $_POST["message"];

if ($_POST) {
  $contenido = "Nombre: " . $nombre . "/nTelefono: " . $telefono . "/nCorreo: " . $correo . "/nMensaje: " . $mensaje ;

  $mail = mail($destino, "Solicitud info", $contenido);
  echo json_encode(["sent" => true]);
} else {
  echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}


header("Location:index.html");

?>
