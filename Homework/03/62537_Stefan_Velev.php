<?php

require_once 'Db.php';

function isValidId(string $id) : bool {
    return ctype_digit($id);
}

function getUser(string $id) : ?array {
    $id = trim($id);

    if (!isValidId($id)) {
        return null;
    }

    $connection = (new Db())->getConnection();

    $selectStatement = $connection->prepare("SELECT * FROM `users` WHERE id = ?");
    $selectStatement->execute([$id]);

    $potentialUser = $selectStatement->fetch();

    return $potentialUser ?: null;
}