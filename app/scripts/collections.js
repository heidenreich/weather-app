var DataModel = Backbone.Model.extend({
	

	url: function(){
		return "http://api.openweathermap.org/data/2.5/weather?units=imperial&callback=?&id=" + this.id
	}
})

WeatherDataCollection = Backbone.Collection.extend({
	model: DataModel,

	url: "http://api.openweathermap.org/data/2.5/weather?units=imperial&callback=?",

	initialize: function(){
		this.on('add', function(data){
			new MainView({model: data})
		})
	}
})