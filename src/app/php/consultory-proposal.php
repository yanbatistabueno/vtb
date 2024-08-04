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
$outro = $_POST["outro"];
$opcao1 = $_POST["1opcao"];
$opcao2 = $_POST["2opcao"];
$opcao3 = $_POST["3opcao"];
$opcao4 = $_POST["4opcao"];
$opcao5 = $_POST["5opcao"];
$opcao6 = $_POST["6opcao"];


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
$_SESSION['outro'] = $outro;
$_SESSION['1opcao'] = $opcao1;
$_SESSION['2opcao'] = $opcao2;
$_SESSION['3opcao'] = $opcao3;
$_SESSION['4opcao'] = $opcao4;
$_SESSION['5opcao'] = $opcao5;
$_SESSION['6opcao'] = $opcao6;
$_SESSION['database-status'] = "";

$type = "Proposta de Consultoria";
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
    1ª opção.......: <b>$opcao1</b><br>
    2ª opção.......: <b>$opcao2</b><br>
    3ª opção.......: <b>$opcao3</b><br>
    4ª opção.......: <b>$opcao4</b><br>
    5ª opção.......: <b>$opcao5</b><br>
    6ª opção.......: <b>$opcao6</b><br>
    Outro.......: <b>$outro</b><br>
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
    
        $query = "INSERT INTO proposta_consultoria (nome,email,empresa,ramo,area,telefone,celular,primeira_opcao,segunda_opcao,terceira_opcao,quarta_opcao,quinta_opcao,sexta_opcao,outro) VALUES (:nome,:email,:empresa,:ramo,:area,:telefone,:celular,:primeira_opcao,:segunda_opcao,:terceira_opcao,:quarta_opcao,:quinta_opcao,:sexta_opcao,:outro);";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nome", $nome);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":empresa", $empresa);
        $stmt->bindParam(":ramo", $ramo);
        $stmt->bindParam(":area", $area);
        $stmt->bindParam(":telefone", $telefone);
        $stmt->bindParam(":celular", $celular);
        $stmt->bindParam(":primeira_opcao", $opcao1);
        $stmt->bindParam(":segunda_opcao", $opcao2);
        $stmt->bindParam(":terceira_opcao", $opcao3);
        $stmt->bindParam(":quarta_opcao", $opcao4);
        $stmt->bindParam(":quinta_opcao", $opcao5);
        $stmt->bindParam(":sexta_opcao", $opcao6);
        $stmt->bindParam(":outro", $outro);
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
