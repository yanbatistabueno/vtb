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
$area = $_POST["area"];
$telefone = $_POST["telefone"];
$celular = $_POST["celular"];
$bairro = $_POST["bairro"];
$cidade = $_POST["cidade"];
$estado = $_POST["estado"];
$curso1 = $_POST["1opcao"];
$proposta = $_POST["proposta"];
$curso2 = $_POST["2opcao"];
$curso3 = $_POST["3opcao"];
$modalidade = $_POST["modalidade"];
$participantes = $_POST["participantes"];
$outro = $_POST["outro"];
$comoCheguei = $_POST["comoChegueiAqui"];


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
$_SESSION['curso1'] = $curso1;
$_SESSION['curso2'] = $curso2;
$_SESSION['curso3'] = $curso3;
$_SESSION['proposta'] = $proposta;
$_SESSION['modalidade'] = $modalidade;
$_SESSION['participantes'] = $participantes;
$_SESSION['outro'] = $outro;
$_SESSION['comoChegueiAqui'] = $comoCheguei;
$_SESSION['area'] = $area;


$_SESSION['database-status'] = "";

$type = "Proposta de Curso";
$_SESSION['type'] = $type;
$body = $nome . " com o E-mail: " . $email . "com o telefone: " . $telefone . " te mandou um e-mail através do site.";
$htmlbody = "<html>
<body>
    Contato através do site, seguem as informações:<br>
    Nome.......: <b>$nome</b><br>
    E-mail.......: <b>$email</b><br>
    Empresa.......: <b>$empresa</b><br>
    Ramo......: <b>$ramo</b><br>
    Área de Trabalho......: <b>$area</b><br>
    Telefone.......: <b>$telefone</b><br>
    Celular.......: <b>$celular</b><br>
    Cidade.......: <b>$cidade</b><br>
    Bairro.......: <b>$bairro</b><br>
    Estado.......: <b>$estado</b><br>
    Como Cheguei.......: <b>$comoCheguei</b><br>
    Proposta.......: <b>$proposta</b><br>
    1ª opção.......: <b>$curso1</b><br>
    2ª opção.......: <b>$curso2</b><br>
    3ª opção.......: <b>$curso3</b><br>
    Modalidade.......: <b>$modalidade</b><br>
    Número de Participantes.......: <b>$participantes</b><br>
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
    
        $query = "INSERT INTO proposta_curso (nome,email,empresa,ramo,area,telefone,celular,bairro,cidade,estado,proposta,primeiro_curso,segundo_curso,terceiro_curso,modalidade,participantes,outro) VALUES (:nome,:email,:empresa,:ramo,:area,:telefone,:celular,:bairro,:cidade,:estado,:proposta,:primeiro_curso,:segundo_curso,:terceiro_curso,:modalidade,:participantes,:outro);";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nome", $nome);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":empresa", $empresa);
        $stmt->bindParam(":ramo", $ramo);
        $stmt->bindParam(":area", $area);
        $stmt->bindParam(":telefone", $telefone);
        $stmt->bindParam(":celular", $celular);
        $stmt->bindParam(":bairro", $bairro);
        $stmt->bindParam(":cidade", $cidade);
        $stmt->bindParam(":estado", $estado);
        $stmt->bindParam(":proposta", $proposta);
        $stmt->bindParam(":primeiro_curso", $curso1);
        $stmt->bindParam(":segundo_curso", $curso2);
        $stmt->bindParam(":terceiro_curso", $curso3);
        $stmt->bindParam(":modalidade", $modalidade);
        $stmt->bindParam(":participantes", $participantes);
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
