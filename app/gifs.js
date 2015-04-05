function getGifs(response) {
	var url_array = new Array();
	var j = 0;
	$.each(response.data, function(i,item){
		var photoURL = "http://media.giphy.com/media/" + item.id + "/giphy.gif";
		//$( ".gifs" ).append( "<img src=\"" + photoURL + "\" id=\"gif" + j + "\"/>" );
		            		var str = "<img src=\"" + photoURL + "\" />";
		            	
		            		//console.log(photoURL);
		            		url_array[j] = photoURL
		j++;
	});

	return url_array ;
}