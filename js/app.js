var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


App.Router.map(function() {
	this.route('about');
	this.resource('contact');
	this.resource('products');
	this.resource('product', {path: '/products/:title'});
});

// CONTROLLER'S
App.IndexController = Ember.Controller.extend({
	productsCount: 3
});

App.AboutController = Ember.Controller.extend({
	numeAbout: 'Hi, from the inside of the About Controller.',
	logo: 'image/logo1.png'
});

App.ContactController = Ember.Controller.extend({
	time: function () {
		return(new Date()).toDateString()
	}.property()
});

App.ProductsController = Ember.Controller.extend({
	model: function() {
		return App.PRODUCTS;
	}.property()
});

App.ProductRoute = Ember.Route.extend({
	model: function(params) {
		console.log(params);
		return App.PRODUCTS.findBy('title', params.title);
	}
});



App.PRODUCTS = [
	{
		title: 'Product1',
		price: '100',
		description: 'Short description for product no.1',
		isOnSale: true,
		image: 'image/logo1.png'
	},
	{
		title: 'Product2',
		price: '45',
		description: 'Short description for product no.2',
		isOnSale: true,
		image: 'image/logo2.png'
	},
	{
		title: 'Product3',
		price: '45',
		description: 'Short description for product no.3',
		isOnSale: true,
		image: 'image/logo2.png'
	},
	{
		title: 'Product4',
		price: '45',
		description: 'Short description for product no.4',
		isOnSale: true,
		image: 'image/logo2.png'
	},
	{
		title: 'Product5',
		price: '45',
		description: 'Short description for product no.5',
		isOnSale: true,
		image: 'image/logo2.png'
	},
	{
		title: 'Product6',
		price: '45',
		description: 'Short description for product no.6',
		isOnSale: true,
		image: 'image/logo2.png'
	},
	{
		title: 'Product7',
		price: '45',
		description: 'Short description for product no.7',
		isOnSale: true,
		image: 'image/logo2.png'
	}
]


//Component for applying active class on links;
App.LinkLiComponent = Em.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  active: function() {
    return this.get('childViews').anyBy('active');
  }.property('childViews.@each.active')
});