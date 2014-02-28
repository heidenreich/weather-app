// var ListView = Backbone.View.extend({

// 	// tagName: 'a',

// 	className: 'ironyard-cities',

// 	listTemplate:_.template($('#list-template').text()),

// 	initialize: function(){

// 		// this.set("name",this.url +);

// 		$('.city-list').append(this.el);
// 		this.render()

// 	},

// 	render: function(){
// 		this.$el.html(this.listTemplate(this.model.attributes))

// 	}
// });

var MainView = Backbone.View.extend({

	className: 'featured-view',

	featureTemplate:_.template($('#feature-template').text()),

	initialize: function(){
		$('.featured-city').html(this.el);
		this.render()
	},

	render: function(){

		this.$el.html(this.featureTemplate(this.model.attributes))
	}
})
