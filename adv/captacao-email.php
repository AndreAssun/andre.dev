<?php
include_once("config/conexao.php");

if($_POST) {

    //variaveis
    
    $nome            =$_POST['nome'];
    $email             =$_POST['email'];
    $telefone          =$_POST['telefone'];
    
    

    

    $queryDocs = "INSERT INTO tbl_docs(id_usuario, documento, id_tipo_documento)
                  VALUES ('$id', '$cpf', 1), ('$id', '$rg', 2)";


    $inserirEmail = mysqli_query($conexao, $queryEmail);
    if($inserirDocs){
        $queryEmail = "INSERT INTO tbl_emails (nome, email, telefone)
                       VALUES('$$nome ', '$email', '$telefone')";

        
}
}

?>