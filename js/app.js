var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


App.Router.map(function() {
	this.route('about');
	this.route('contact');
});

App.IndexController = Ember.Controller.extend({
	productsCount: 3
});

App.AboutController = Ember.Controller.extend({
	numeAbout: 'Hi, from the inside of the About Controller.',
	logo: 'image/logo.png'
});

App.ContactController = Ember.Controller.extend({
	time: function () {
		return(new Date()).toDateString()
	}.property()
});


//Component for applying active class on links;
App.LinkLiComponent = Em.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  active: function() {
    return this.get('childViews').anyBy('active');
  }.property('childViews.@each.active')
});