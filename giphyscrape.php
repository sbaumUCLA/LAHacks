<?php

$mood = trim($_POST["mood"]);
$gifs = file_get_contents("http://api.giphy.com/v1/gifs/search?q=".$mood."&limit=10&api_key=dc6zaTOxFJmzC");
echo $gifs;

?>

