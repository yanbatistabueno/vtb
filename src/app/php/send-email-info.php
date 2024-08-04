<?php
session_start();
$nome = $_SESSION['nome'];
$email = $_SESSION['email'];
$telefone = $_SESSION['telefone'];
$celular = $_SESSION['celular'];
$type = $_SESSION['type'];
$ramo = $_SESSION['ramo'];
$empresa = $_SESSION['empresa'];
if ($type == "Fale Conosco"){
    $assunto = $_SESSION['assunto'];
    $mensagem = $_SESSION['mensagem'];
}

if ($type == "Software Upgrade"){
    $bairro = $_SESSION['bairro'];
    $cidade = $_SESSION['cidade'];
    $estado = $_SESSION['estado'];
    $software = $_SESSION['software'];
    $serial = $_SESSION['serial'];
}

if ($type == "Proposta de Software"){
    $software = $_SESSION['software'];
    $licenca = $_SESSION['licenca'];
    $area = $_SESSION['area'];
}

if ($type == "Proposta de Curso"){
    $bairro = $_SESSION['bairro'];
    $cidade = $_SESSION['cidade'];
    $estado = $_SESSION['estado'];
    $area = $_SESSION['area'];
    $curso1 = $_SESSION['curso1'];
    $curso2 = $_SESSION['curso2'];
    $curso3 = $_SESSION['curso3'];
    $proposta = $_SESSION['proposta'];
    $modalidade = $_SESSION['modalidade'];
    $participantes = $_SESSION['participantes'];
    $outro = $_SESSION['outro'];
    $comoCheguei = $_SESSION['comoChegueiAqui'];
}

if ($type == "Proposta de Consultoria"){
    $area = $_SESSION['area'];
    $opcao1 = $_SESSION['1opcao'];
    $opcao2 = $_SESSION['2opcao'];
    $opcao3 = $_SESSION['3opcao'];
    $opcao4 = $_SESSION['4opcao'];
    $opcao5 = $_SESSION['5opcao'];
    $opcao6 = $_SESSION['6opcao'];
    $outro = $_SESSION['outro'];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VTB - Revisão de informações do formulário</title>
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <main>
        <?php
        if($type != "" && $email != ""){
            if($_SESSION['database-status'] != "failed"){
                echo "<h1><span>E-mail enviado com sucesso!</span></h1>
                <h2>Seu E-mail chegou em nosso banco de dados e já retornaremos com uma resposta.</h2>";
            }else{
                echo "<h1><span>E-mail enviado com sucesso!</span></h1>  
                <h3>Seu E-mail <span>chegou em nossa caixa de mensagens com sucesso</span>, porém devido a um erro de formatação em seu formulário as suas informações não foram registradas em nosso banco de dados. </h3>";
            }
            echo "<h3>Revise as informações enviadas:</h3>
            <p><b>Tipo:</b> $type</p>
            <p><b>Nome: </b>$nome</p>
            <p><b>Email: </b>$email</p>
            <p><b>Telefone: </b>$telefone</p>";
        
            if($celular != ""){
                echo "<p><b>Celular: </b>$celular</p>";
            }
            if($empresa != ""){
                echo "<p><b>Empresa: </b>$empresa</p>";
            }
            if($ramo != ""){
                echo "<p><b>Ramo: </b>$ramo</p>";
            }
            
            if($type == "Fale Conosco"){
                echo "<p><b>Assunto: </b>$assunto</p>
                <p><b>Mensagem: </b>$mensagem</p>";
            }
            if($type == "Software Upgrade"){
                echo "<p><b>Bairro: </b>$bairro</p>
                <p><b>Cidade: </b>$cidade</p>
                <p><b>Estado: </b>$estado</p>
                <p><b>Software: </b>$software</p>
                <p><b>Serial: </b>$serial</p>";
            }
            if($type == "Proposta de Software"){
                echo "<p><b>Software: </b>$software</p>
                <p><b>Número de licenças: </b>$licenca</p>";
                if($area != ""){
                    echo "<p><b>Área de Trabalho: </b>$area</p>";
                }
            }
            if($type == "Proposta de Curso"){
                if($area != ""){
                    echo "<p><b>Área de Trabalho: </b>$area</p>";
                }
                echo "<p><b>Como Cheguei Aqui: </b>$comoCheguei</p>";
                if($bairro != ""){
                    echo "<p><b>Bairro: </b>$bairro</p>";
                }
                if($cidade != ""){
                    echo "<p><b>Cidade: </b>$cidade</p>";
                }
                if($estado != ""){
                    echo "<p><b>Estado: </b>$estado</p>";
                }
                echo "<p><b>1ª Opção: </b>$curso1</p>";
                if($curso2 != ""){
                    echo "<p><b>2ª Opção: </b>$curso2</p>";
                }
                if($curso3 != ""){
                    echo "<p><b>3ª Opção: </b>$curso3</p>";
                }
                echo "<p><b>Modalidade do Curso: </b>$modalidade</p>";
                echo "<p><b>Número de Participantes: </b>$participantes</p>";
                if($outro != ""){
                    echo "<p><b>Outro: </b>$outro</p>";
                }
            }
            if($type == "Proposta de Consultoria"){
                if($area != ""){
                    echo "<p><b>Área de Trabalho: </b>$area</p>";
                }
                echo "<p><b>1ª Opção: </b>$opcao1</p>";
                if($opcao2 != ""){
                    echo "<p><b>2ª Opção: </b>$opcao2</p>";
                }
                if($opcao3 != ""){
                    echo "<p><b>3ª Opção: </b>$opcao3</p>";
                }
                if($opcao4 != ""){
                    echo "<p><b>4ª Opção: </b>$opcao4</p>";
                }
                if($opcao5 != ""){
                    echo "<p><b>5ª Opção: </b>$opcao5</p>";
                }
                if($opcao6 != ""){
                    echo "<p><b>6ª Opção: </b>$opcao6</p>";
                }
                if($outro != ""){
                    echo "<p><b>Outro: </b>$outro</p>";
                }
            }
        }else{
            echo "<h1>Acesso de forma indevida.</h1>
            <h2>Envie um formulário em nosso site para consultar as informações enviadas.</h2>";
        }
       ?>
        
        <a class="anchor-button" href="https://vtb-server-rendering.000webhostapp.com">Voltar para o Site</a>
    </main>
    
</body>
</html>









