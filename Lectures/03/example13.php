<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
echo date("Y_m_d") . "<br/>";
echo date("Y.m.d") . "<br/>";
echo date("d/m/Y") . "<br/>";

$tomorrow = mktime(0, 0, 0, date("m"), date("d") + 1, date("Y"));
echo "Утре ще бъде " . date("d.m.Y", $tomorrow) . "г.";
?>
</body>
</html>