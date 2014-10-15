var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


App.Router.map(function() {
	this.route('about');
	this.route('contact');
});


//Component for applying active class on links;
App.LinkLiComponent = Em.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  active: function() {
    return this.get('childViews').anyBy('active');
  }.property('childViews.@each.active')
});