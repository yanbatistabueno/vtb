<?php
// header("Accept: application/json", "Content-Type: application/json");
session_start();
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$nome = $_POST["nome"];
$email = $_POST["email"];
$empresa = $_POST["empresa"];
$ramo = $_POST["ramo"];
$telefone = $_POST["telefone"];
$celular = $_POST["celular"];
$bairro = $_POST["bairro"];
$cidade = $_POST["cidade"];
$estado = $_POST["estado"];
$software = $_POST["software"];
$serial = $_POST["serial"];

if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}


$_SESSION['nome'] = $nome;
$_SESSION['email'] = $email;
$_SESSION['empresa'] = $empresa;
$_SESSION['ramo'] = $ramo;
$_SESSION['telefone'] = $telefone;
$_SESSION['celular'] = $celular;
$_SESSION['bairro'] = $bairro;
$_SESSION['cidade'] = $cidade;
$_SESSION['estado'] = $estado;
$_SESSION['software'] = $software;
$_SESSION['serial'] = $serial;

$_SESSION['database-status'] = "";

$type = "Software Upgrade";
$_SESSION['type'] = $type;
$body = $nome . " com o E-mail: " . $email . "com o telefone: " . $telefone . " te mandou um e-mail através do site.";
$htmlbody = "<html>
<body>
    Contato através do site, seguem as informações:<br>
    Nome.......: <b>$nome</b><br>
    E-mail.......: <b>$email</b><br>
    Empresa.......: <b>$empresa</b><br>
    Ramo......: <b>$ramo</b><br>
    Telefone.......: <b>$telefone</b><br>
    Celular.......: <b>$celular</b><br>
    Cidade.......: <b>$cidade</b><br>
    Bairro.......: <b>$bairro</b><br>
    Estado.......: <b>$estado</b><br>
    Software.......:  <b>$software</b><br>
    Serial.......: <b>$serial</b><br>
</body>
</html>";
// Create an instance; passing `true` enables exceptions
if($_SERVER["REQUEST_METHOD"] == "POST" && $nome != ""){
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->CharSet = 'UTF-8';
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
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
        $headers .= "From: $nome <$email>";
    
        $mail->send();
        $mail->clearAddresses();
        $mail->clearAttachments();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    };
    
    try {
        require_once "database-setup.php";
    
        $query = "INSERT INTO upgrade_software (nome,email,empresa,ramo,telefone,celular,bairro,cidade,estado,software,serialnumber) VALUES (:nome,:email,:empresa,:ramo,:telefone,:celular,:bairro,:cidade,:estado,:software,:serialnumber);";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nome", $nome);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":empresa", $empresa);
        $stmt->bindParam(":ramo", $ramo);
        $stmt->bindParam(":telefone", $telefone);
        $stmt->bindParam(":celular", $celular);
        $stmt->bindParam(":bairro", $bairro);
        $stmt->bindParam(":cidade", $cidade);
        $stmt->bindParam(":estado", $estado);
        $stmt->bindParam(":software", $software);
        $stmt->bindParam(":serialnumber", $serial);
        $stmt->execute();
        
        $query2 = "INSERT INTO emails (nome,email,empresa,ramo,formulario) VALUES (:nome,:email,:empresa,:ramo,:formulario);";
        $stmt2 = $pdo->prepare($query2);
        $stmt2->bindParam(":nome", $nome);
        $stmt2->bindParam(":email", $email);
        $stmt2->bindParam(":empresa", $empresa);
        $stmt2->bindParam(":ramo", $ramo);
        $stmt2->bindParam(":formulario", $type);
        $stmt2->execute();
        
        $pdo = null;
        $stmt = null;
        $stmt2 = null;
        header("Location: send-email-info.php");
    } catch (PDOException $e) {
        $_SESSION['database-status'] = "failed";
        echo $e->getMessage();
    }
}else{
    echo "Acesso de forma indevida";
}
?>
