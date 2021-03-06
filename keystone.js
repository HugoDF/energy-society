// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
	handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Energy Society',
	'brand': 'Energy Society',
	
	// 'sass': 'public',
	'static': 'public',
	'favicon': 'public/images/uclu-logo-flame-black.png',
	'views': 'templates/views',
	'view engine': 'hbs',
	'compress': true,
	
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,
	
	'emails': 'templates/emails',
	
	'signout redirect': '/',


	'wysiwyg images': true,
	'wysiwyg cloudinary images': true,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'energy-soc',
});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
	find: '/images/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
}, {
	find: '/keystone/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
}]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'content': ['events', 'committee-members', 'sections', 'speakers'],
	'users': 'users',
	'enquiries': 'enquiries',
	'blog': ['posts', 'post-categories'],
	'galleries': 'galleries',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start(function(){
	if(process.env.NODE_ENV=='production'){
		var http = require('http');
		function wake(){
			http.get("http://uclu-energy.herokuapp.com", function(res) {
			var date = new Date();
			console.log("Response: " + res.statusCode + ' Time: '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});
	}
	wake();
	setInterval(wake,1500000);
	}
});
