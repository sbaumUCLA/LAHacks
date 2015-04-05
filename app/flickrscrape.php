<?php

$mood = trim($_POST["mood"]);
$pictures = file_get_contents("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=7dd9bd1443de0a82b3b514f8a260e667&tags=expression,".$mood."&tag_mode=any&sort=interestingness-desc&content_type=1&media=photos&format=json&per_page=30");
//&sort=interestingness-desc&content_type=1&media=photos&format=json&per_page=10"
//change the above URL to the api url you have
//$jsonpictures = substr($pictures, 10, 0);
echo substr($pictures, 14, -1);
?>

