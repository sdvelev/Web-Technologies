<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php

$currency = 79;
$exchange = $currency;

$count200 = (int) ($exchange / 200);
$exchange %= 200;

$count100 = (int) ($exchange / 100);
$exchange %= 100;

$count50 = (int) ($exchange / 50);
$exchange %= 50;

$count20 = (int) ($exchange / 20);
$exchange %= 20;

$count10 = (int) ($exchange / 10);
$exchange %= 10;

$count5 = (int) ($exchange / 5);
$exchange %= 5;

$count2 = (int) ($exchange / 2);
$exchange %= 2;

echo nl2br("Ресто - " . $currency . " стотинки, се връщат:\n");
if ($count200 != 0)
    echo nl2br($count200 . " монета(и) от 2 лева\n");
if ($count100 != 0)
    echo nl2br($count100 . " монета(и) от 1 лев\n");
if ($count50 != 0)
    echo nl2br($count50 . " монета(и) от 50 стотинки\n");
if ($count20 != 0)
    echo nl2br($count20 . " монета(и) от 20 стотинки\n");
if ($count10 != 0)
    echo nl2br($count10 . " монета(и) от 10 стотинки\n");
if ($count5 != 0)
    echo nl2br($count5 . " монета(и) от 5 стотинки\n");
if ($count2 != 0)
    echo nl2br($count2 . " монета(и) от 2 стотинки\n");
if ($exchange != 0)
    echo nl2br($exchange . " монета(и) от 1 стотинки\n");
?>
</body>
</html><?php
