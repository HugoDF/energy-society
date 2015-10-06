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
			'content':'<p><strong>Are you interested in the energy industry, its dynamics and future implications?</strong></p><p>If so, look no further than the UCL Energy Society&rsquo;s annual Energy Conference. This year, it&rsquo;s going to be bigger and better than ever. From clean energy or&nbsp;energy law to&nbsp;the global energy sector, we&rsquo;ve got it covered.&nbsp;</p><p>The event will involve a panel discussion on&nbsp;<em>Investing in Clean Energy</em>, as well as speakers who are leaders in the industry and experts in their fields<strong>.</strong>They include:</p><ul><li><strong>Stuart Lawson (Executive Director, EY)</strong>&nbsp;- veteran of the Russian Financial Industry, discussing &ldquo;Russia: Where to Next? The role of energy"</li><li><strong>Peter Vivian-Neal (CEO, Kalahari GeoEnergy)&nbsp;</strong>- leader of a Zambian based geothermal development company&nbsp;focussing on&nbsp;energy in East and Southern Africa</li><li><strong>Anthony Agnew&nbsp;(Managing Director, The Energy Efficient Company)&nbsp;</strong>- discussing the market for renewable generation and funding possibilities for investing in clean energy&nbsp;</li><li><strong>Kirsty Hamilton (Associate Fellow, Chatham House)</strong>- policy head of the Low Carbon Finance Group, developer of the Renewable Energy Finance project</li><li><strong>Prof. Raphael Heffron (Lecturer in Law, U. of Leeds)&nbsp;</strong>- expert in energy law and policy, low carbon energy, energy justice and Arctic energy law&nbsp;</li></ul><p>And many more...</p><p>Please join us from&nbsp;<strong>11a.m. - 7.30p.m.&nbsp;</strong>on&nbsp;<strong>28 February&nbsp;</strong>in the&nbsp;<strong>Wilkins&nbsp;Gustave Tuck Lecture Theatre&nbsp;</strong>to enjoy some stimulating discussion, interesting insights and unique perspectives&nbsp;from our experts. Food&nbsp;and drink will be provided.&nbsp;</p><p>Look out for our event invitation on Facebook for more information, relevant updates and the link to buy your tickets online:</p><ul><li>UCL Energy Society Members: &pound;5</li><li>UCL non-society students: &pound;10</li><li>Early bird non-UCL students: &pound;15</li><li>Non-UCL students: &pound;20&nbsp;</li></ul><p>We look forward to seeing you there!</p>', 
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
			'content':'<p>From nuclear fusion research and oil exploration, to commodity trading and energy law, we aim to encompass all aspects of the energy sector and aim to provide members with an interesting and engaging platform for research and debate.</p><ul><li>We inform students on developments within the energy industries through a series of events.</li><li>We provide unrivalled interaction with industry leaders an pioneering scientists.</li><li>We provide members with opportunities to meet top graduate employers and make a lasting impression.</li></ul>',
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
			'redirectURL': '/gallery',
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
