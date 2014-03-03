console.log('What in the HELL?!?!?!?!?!?');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start(); 


});

function geoFindMe() {
  var output = document.getElementById("out");

  // if (!navigator.geolocation){
  //   output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
  //   return;
  // }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}



// var chartData = weather.map(function(data){

// 	return {
// 		temp: data.get(main.temp),
// 		color: Math.floor(Math.random()*16777215).toString(16)
// 	}

// })

// var data = [{
//       value: 35,
//       color: "#36ab8f"
//    }, {
//       value: 50,
//       color: "#49244F"
//    }, {
//       value: 46,
//       color: "#DBA36F"
//    }, {
//       value: 40,
//       color: "#FFFF71"
//    }, {
//       value: 57,
//       color: "#4D5360"
//    }, {
//    	value: 48,
//       color: "B02000"
//    }
// ]

// var options = {
//  	animation: true
// };

    //Get the context of the canvas element we want to select
// var c = $('#myChart');
// var ct = c.get(0).getContext('2d');
// var ctx = document.getElementById("myChart").getContext("2d");
    
// myNewChart = new Chart(ct).PolarArea(data, options);


// APPID = ad72baee8e450cb81661aa6fe56857e5

// weatherDataPoints = new WeatherDataCollection();

// weatherDataPoints.on(new ListView({this.model}));

// weatherDataPoints.on('add', function(data){
// 	new ListView({model: data})
// });

// weatherDataPoints.on('change', function(data){
// 	new ListView({model: data})
// });


// $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=?', function(response){ 
// 	weatherDataPoints.add(response)
// });

// $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=4235668&callback=?', function(response){ 
// 	weatherDataPoints.add(response)
// });

// $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=4239867&callback=?', function(response){ 
// 	weatherDataPoints.add(response)
// });

// $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=4180439&callback=?', function(response){ 
// 	weatherDataPoints.add(response)
// });

// $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=4597200&callback=?', function(response){ 
// 	weatherDataPoints.add(response)
// });

// $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=4453066&callback=?', function(response){
// 	weatherDataPoints.add(response)
// })




