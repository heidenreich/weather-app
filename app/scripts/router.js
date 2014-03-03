// var MainRouter = Backbone.Router.extend({

// 	routes: {
// 		'city/:cityName':'featurePage',
// 		'':'superPage'
// 	},

// 	initialize: function(){
// 		console.log('we be routing')
// 	},

// 	featurePage: function(cityName){
// 		// $('.featured-city').empty();
// 		// new MainView({model:cityName})
// 		var model = weatherDataPoints.findWhere({name:cityName});

// 		new MainView({model:model})
// 	}

// })


var MainRouter = Backbone.Router.extend({
  	routes: {
    	"city/:name" 	: "cityWeather"

	},

	idToName: {
		"Spartanburg" 	: "4597200",
		"Greenville" 	: "4580543",
		"Charleston"	: "4574324",
		"Atlanta"		: "4180439",
		"Asheville"		: "4453066"
	},

	initialize: function(){
		this.weather = new WeatherDataCollection;
	},

	cityWeather: function(name){
		$('.featured-city').html("<img src='images/ajax-loader.gif'/>")
		this.weather.url += ("&id=" + this.idToName[name])
		this.weather.fetch()	
	}


})
 
