<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
function make_yogurt($container = "bowl", $flavour = "raspberry", $style = "Greek") {
    return "Making a $container of $flavour $style yogurt.\n";
}

echo make_yogurt(style: "natural");
?>
</body>
</html>