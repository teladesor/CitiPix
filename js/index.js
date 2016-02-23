/*
If input= "New York" or "New York City" or "NYC" then make the background nyc.jpg
else if input = "San Francisco" or "SF" or "Bay Area" then make the background sf.jpg
else if input = "Los Angeles" or "LA" or "LAX" then make the background la.jpg
else if input = "Austin" or "ATX" then make the background austin.jpg
else if input = "Sydney" or "SYD" then make the background sydney.jpg
else if alert
*/
var images=[
"images/citipix_skyline.jpg",
"images/austin.jpg",
"images/la.jpg",
"images/nyc.jpg",
"images/sf.jpg",
"images/sydney.jpg"];

$(document).ready(function(){
function changeImage(input){input = input.toLowerCase();



if (input === "new york"||input === "new york city"||input === "nyc") {
$("body").css("background-image","url(images/nyc.jpg)");
}
else if (input === "san francisco"||input === "sf"||input === "bay area") {
$("body").css("background-image","url(images/sf.jpg)");
}
else if (input === "los angeles"||input === "la"||input === "lax") {
$("body").css("background-image","url(images/la.jpg)");
}
else if (input === "austin"||input === "atx") {
$("body").css("background-image","url(images/austin.jpg)");
}
else if (input === "sydney"||input === "syd") {
$("body").css("background-image","url(images/sydney.jpg)");
}
else {
alert("name a city");
}
$("#city-type").val("");	
}
$("form").on("submit", 
		function(event){ event.preventDefault();changeImage( $('#city-type').val() );	
		}
	);
$("#submit-btn").on("click",function(event){ 
changeImage( $('#city-type').val() );
		}
	);
});