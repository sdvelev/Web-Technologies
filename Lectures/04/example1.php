<?php

class User {
    public $title;
    public $firstName;
    public $lastName;
}

$user = new User();
$user->title = "Dr.";
$user->firstName = "Peter";
$user->lastName = "Petrov";

echo $user->title . " " . $user->firstName . " " . $user->lastName;