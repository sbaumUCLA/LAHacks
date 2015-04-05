<?php

$mood = trim($_POST["mood"]);
$html = file_get_contents("https://8tracks.com/explore/".$mood);
//echo $html;
//<iframe src="http://8tracks.com/mixes/MIXID/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
//<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;">
//<a href="MIXURL?utm_medium=trax_embed">MIXNAME</a> from <a href="MIXER?utm_medium=trax_embed">MIXER</a> on <a href="http://8tracks.com?utm_medium=trax_embed">8tracks Radio</a>.</p>

///toxicemotions/she-hits-like-ecstasy#smart_id=tags:happy:safe
//(.)\35

echo $html;

?>

