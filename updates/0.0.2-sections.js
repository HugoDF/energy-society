/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */
var con = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo non lacus vulputate eleifend nec eu massa. Cras vestibulum hendrerit sapien sed blandit. Maecenas eget purus mattis, consectetur nunc sit amet, rhoncus mi. Donec bibendum tortor non dui laoreet convallis. Morbi rhoncus eros et sapien bibendum, non faucibus diam eleifend. Proin et quam sapien. Cras et libero dapibus, gravida libero ac, maximus orci. In hac habitasse platea dictumst. Integer pretium risus in velit pretium, hendrerit bibendum elit efficitur. Nulla pharetra porta turpis, nec condimentum dui luctus nec. Vestibulum ac mi eu risus sollicitudin ullamcorper';
exports.create = {
	
	Section: [
		{ 
			'title': 'Conference', 
			'sortOrder':'1', 
			'content':con, 
			'defaultImage': '/images/wind-farm-light.jpg',
			'homepage': 'true',
		},
		{ 
			'title': 'Home', 
			'sortOrder':'2', 
			'redirectURL': '/home',
		},
		{ 
			'title': 'About us',
			'sortOrder': '3', 
			'content':con,
			'defaultImage': '/images/energy-management.jpg'
		},
		{ 
			'title': 'Committee', 
			'sortOrder': '4', 
			'redirectURL': '/committee'
		},
		{ 
			'title': 'Events', 
			'sortOrder': '5', 
			'redirectURL': '/events'
		},
		{ 
			'title': 'Contact us', 
			'sortOrder':'6', 
			'redirectURL': '/contact'
		},
		{ 
			'title': 'Blog', 
			'sortOrder':'7', 
			'redirectURL': '/blog',
			'state': 'hidden',
		},
		{ 
			'title': 'Gallery', 
			'sortOrder':'8', 
			'redirectURL': '/contact',
			'state': 'hidden',
		},
	]
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {
	
	var newAdmin = new User.model(admin);
	
	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});
	
}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};

*/
