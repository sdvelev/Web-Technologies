<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$a = 10;
$b = 12;
$c = 3;
if ($a > $b && $a > $c) {
    echo $a;
} elseif ($b > $c && $b > $a) {
    echo $b;
} else {
    echo $c;
}
?>
</body>
</html><?php
