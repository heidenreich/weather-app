var ListView = Backbone.View.extend({

	// tagName: '',

	className: 'ironyard-cities',

	listTemplate:_.template($('#list-template').text()),

	initialize: function(){

		$('.city-list').append(this.el);
		this.render()

	},

	render: function(){
		this.$el.html(this.listTemplate(this.model.attributes))

	}
});

var MainView = Backbone.View.extend({

	className: 'featured-city',

	featureTemplate:_.template($('#feature-template').text()),

	initialize: function(){
		$('.featured-city').append(this.el);
		this.render()
	},

	render: function(){

		this.$html(this.featureTemplate(this.model.attributes))
	}
})
