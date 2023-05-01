<?php
$name = $_POST['name'];
$secondname = $_POST['secondname'];
$phone = $_POST['phone'];

// Проверяем, существует ли файл
if (file_exists('Calls.xml')) {
    // Если файл существует, загружаем его содержимое в объект DOMDocument
    $xml = new DOMDocument();
    $xml->load('Calls.xml');
} else {
    // Если файл не существует, создаем новый XML-документ
    $xml = new DomDocument('1.0', 'UTF-8');
    $root = $xml->createElement('users');
    $xml->appendChild($root);
    $root->appendChild($xml->createTextNode("\n"));
}

// Создаем новый элемент и добавляем символ переноса строки
$user = $xml->createElement('user');
$user->appendChild($xml->createTextNode("\n"));

$name_node = $xml->createElement('name', $name);
$user->appendChild($name_node);
$user->appendChild($xml->createTextNode("\n"));

$secondname_node = $xml->createElement('secondname', $secondname);
$user->appendChild($secondname_node);
$user->appendChild($xml->createTextNode("\n"));

$phone_node = $xml->createElement('phone', $phone);
$user->appendChild($phone_node);
$user->appendChild($xml->createTextNode("\n"));

$xml->documentElement->appendChild($user);
$xml->documentElement->appendChild($xml->createTextNode("\n"));

// Сохраняем XML-документ на сервере
$xml->save('Calls.xml');

// Перенаправляем пользователя на страницу contacts.html
header("Location: contacts.html");
