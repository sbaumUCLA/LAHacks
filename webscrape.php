<?php

$mood = trim($_POST["mood"]);
$quotes = file_get_contents("https://www.goodreads.com/quotes/tag/".$mood);
echo $quotes;

?>

