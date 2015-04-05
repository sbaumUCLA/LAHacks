function getColors(response) {
	var url_array = new Array();
	var j = 0;
	$.each(response, function(i,item){
		var colorURL = item.imageUrl;
	//	$( ".colors" ).append( "<img src=\"" + colorURL + "\" id=\"color" + j + "\"/>" );
		var str = "<img src=\"" + colorURL + "\" />";
		url_array[j] = str;
		j++;
	});

	return url_array ;
}