<?php 
    $to .= "8800230@gmail.com";
    $subject .= "Data Test";
    $message .= "Phone: ".$_POST['tel']."<br>";
    $message .= "E-mail: ".$_REQUEST['email']."<br>";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    mail($to, $subject, $message, $headers);
?>