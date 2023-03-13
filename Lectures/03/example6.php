<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$summer_cities = array("Sozopol", "Barcelona", "Santorini", "Chernomoretz", "Thassos");
echo nl2br("I visited " . $summer_cities[0] . " in June 2014, " .$summer_cities[1] . " in July 2016.\n");

$summer_cities2 = array("Sozopol" => "June", "Barcelona" => "July");

echo "I visited Sozopol in " . $summer_cities2["Sozopol"] . " and Barcelona in " .$summer_cities2["Barcelona"] . ".";

$vacation = array("June" => array("Sozopol"), "July" => array("Barcelona", "Santorini"), "August" =>
array("Chernomoretz", "Thasos"));
?>
</body>
</html>