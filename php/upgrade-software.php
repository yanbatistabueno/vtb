<?php
    // //These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $ramo = $_POST["ramo"];
    $telefone = $_POST["telefone"];
    $celular = $_POST["celular"];
    $empresa = $_POST["empresa"];
    $bairro = $_POST["bairro"];
    $cidade = $_POST["cidade"];
    $estado = $_POST["estado"];
    $software = $_POST["software"];
    $serial = $_POST["serial"];
    $body = $nome . " com o E-mail: " . $email . " com o telefone: " . $telefone . " te mandou um e-mail através do site." . "Assunto: " . $assunto . $mensagem;
    $htmlbody = "<html>
     <body>
         Pedido de Upgrade de Software pelo site, seguem as informações:<br>
         Nome.......: <b>$nome</b><br>
         E-mail.......: <b>$email</b><br>
         Ramo.......: <b>$ramo</b><br>
         Empresa.......: <b>$empresa</b><br>
         Telefone.......: <b>$telefone</b><br>
         Celular.......: <b>$celular</b><br>
         Cidade.......:  <b>$cidade</b><br>
         Bairro.......:  <b>$bairro</b><br>
         Estado.......:  <b>$estado</b><br>
         Software.......:  <b>$software</b><br>
         Serial.......:  <b>$serial</b><br>
     </body>
 </html>";
    

    // Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    
    try {
        //Server settings
        $mail->CharSet = 'UTF-8';
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'ezdevvil1@gmail.com';                     //SMTP username
        $mail->Password   = 'gsqbbcquzyiogwia';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($email, $nome);
        $mail->addAddress('ezdevvil1@gmail.com');     //Add a recipient
        $mail->AddReplyTo($email);
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Contato através do site.';
        $mail->Body    = $htmlbody;
        $mail->AltBody = $body;

        $headers  = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=UTF-8\n";
        $headers .= "From: $name <$email>";

        $mail->send();
        echo 'Message has been sent';
        header("Location: http://localhost:3000/email-success?type=success&name=$nome&email=$email$");
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

?>


<!-- password: gsqbbcquzyiogwia -->