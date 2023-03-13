<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
function say_hello($authority) {
    echo "Dear Mr./Mrs. " . $authority . "<br/>";
}
echo "Today,<br/>";
say_hello("President");
say_hello("Professor");
say_hello("Chief Editor");
echo "<br/>";
echo "That was it.<br/>";
echo "Goodbye!";
?>
</body>
</html>