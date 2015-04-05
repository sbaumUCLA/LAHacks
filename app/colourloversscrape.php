<?php

$mood = $_POST['mood'];
$colors = file_get_contents("http://www.colourlovers.com/api/palettes&keywords=".$mood."&format=json&numResults=6");
//http://www.colourlovers.com/api/colors?keywords=happy&format=json
//echo substr($colors, 1, -1);
echo "$colors";

?>

