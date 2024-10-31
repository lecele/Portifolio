<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "lecele@gmamil.com";  // Coloque o e-mail do destinatário aqui
  $subject = "Nova mensagem de $name";
  $body = "Nome: $name\nE-mail: $email\n\nMensagem:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "E-mail enviado com sucesso!";
  } else {
    echo "Falha no envio do e-mail.";
  }
}
?>
