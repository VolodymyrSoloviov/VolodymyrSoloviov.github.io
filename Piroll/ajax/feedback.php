<?php 

	$name = htmlspecialchars($_POST['name']);
	$email = htmlspecialchars($_POST['email']);
	$subject = htmlspecialchars($_POST['subject']);
	$message = htmlspecialchars($_POST['message']);

	if($name == '' || $email == '' || $subject == '' || $message == '') {
		echo "Fill in all fields";
		exit;
	}

	//Відправка

	$subject = "=?utf-8?B?".base64_encode($subject)."?=";
	$headers = "Form: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	if(mail("meilegram@ukr.net", $subject, $message, $headers))
		echo "Message sent";
	else 
		echo "Message has not been sent";
