function geoFindMe(){function a(a){var b=a.coords.latitude,d=a.coords.longitude;c.innerHTML="<p>Latitude is "+b+"° <br>Longitude is "+d+"°</p>";var e=new Image;e.src="http://maps.googleapis.com/maps/api/staticmap?center="+b+","+d+"&zoom=13&size=300x300&sensor=false",c.appendChild(e)}function b(){c.innerHTML="Unable to retrieve your location"}var c=document.getElementById("out");c.innerHTML="<p>Locating…</p>",navigator.geolocation.getCurrentPosition(a,b)}var DataModel=Backbone.Model.extend({url:function(){return"http://api.openweathermap.org/data/2.5/weather?units=imperial&callback=?&id="+this.id}});WeatherDataCollection=Backbone.Collection.extend({model:DataModel,url:"http://api.openweathermap.org/data/2.5/weather?units=imperial&callback=?",initialize:function(){this.on("add",function(a){new MainView({model:a})})}});var MainRouter=Backbone.Router.extend({routes:{"city/:name":"cityWeather"},idToName:{Spartanburg:"4597200",Greenville:"4580543",Charleston:"4574324",Atlanta:"4180439",Asheville:"4453066"},initialize:function(){this.weather=new WeatherDataCollection},cityWeather:function(a){$(".featured-city").html("<img src='images/ajax-loader.gif'/>"),this.weather.url+="&id="+this.idToName[a],this.weather.fetch()}}),MainView=Backbone.View.extend({className:"featured-view",featureTemplate:_.template($("#feature-template").text()),initialize:function(){$(".featured-city").html(this.el),this.render()},render:function(){this.$el.html(this.featureTemplate(this.model.attributes))}});$(document).ready(function(){router=new MainRouter,Backbone.history.start(),console.log("What in the HELL?!?!?!?!?!?")});