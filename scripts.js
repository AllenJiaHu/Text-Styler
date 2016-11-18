//http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho
//http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   

// Placing Multiple Gifs on a page
// function gotData(giphy) {
//   for (var i = 0; i < giphy.data.length; i++) {
//     createImg(giphy.data[0].images.original.url);
//   }
//  }

// For a Completely Random Gif
// function gotData(giphy) {
// 	createImg(giphy.data.image_original_url)
// }

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=3d + space + love + c4d"; //HOW DO I RANDOMIZE THESE VARIABLES?
var x = Math.floor((Math.random() * 25) + 1);

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
};

function gotData(giphy) {
	createImg(giphy.data[x].images.original.url)
};

// $(document).ready(function(){

// 	$("img").gifplayer(); //HOW DO YOU PUT A CLASS/ID ON CREATED IMAGE? DOESN'T WORK?

// });
// var title = prompt("Insert Your Text"); //PROMPT ISN'T INSERTING THINGS INTO THE WEBPAGE? API GETTING IN THE WAY?
// $('h1').text(title);

