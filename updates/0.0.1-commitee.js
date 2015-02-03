/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */
var con = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo non lacus vulputate eleifend nec eu massa. Cras vestibulum hendrerit sapien sed blandit. Maecenas eget purus mattis, consectetur nunc sit amet, rhoncus mi. Donec bibendum tortor non dui laoreet convallis. Morbi rhoncus eros et sapien bibendum, non faucibus diam eleifend. Proin et quam sapien. Cras et libero dapibus, gravida libero ac, maximus orci. In hac habitasse platea dictumst. Integer pretium risus in velit pretium, hendrerit bibendum elit efficitur. Nulla pharetra porta turpis, nec condimentum dui luctus nec. Vestibulum ac mi eu risus sollicitudin ullamcorper',
	web = 'uclu-energy.herokuapp.com';
exports.create = {
	CommitteeMember: [
	//real committee
		{ 'name.first': 'Jack', 'name.last': 'Woodnott', 'position': 'President', 'description': con, 'website': web, 'defaultImage': '/images/jack.jpg',},
		{ 'name.first': 'Camille', 'name.last': 'Ng', 'position': 'Vice-President', 'description': con, 'website': web, 'defaultImage': '/images/camille.jpg',},
		{ 'name.first': 'Pavel', 'name.last': 'Degtiarev', 'position': 'Treasurer', 'description': con, 'website': web, 'defaultImage': '/images/pavel.jpg',},
		{ 'name.first': 'Daniel', 'name.last': 'Lengyel', 'position': 'Head of Conference', 'description': con, 'website': web, 'defaultImage': '/images/daniel.jpg',},
		{ 'name.first': 'Kim', 'name.last': 'Diep', 'position': 'Postgraduate Officer', 'description': con, 'website': web},
		{ 'name.first': 'Talha', 'name.last': 'Pirzada', 'position': 'Postgraduate Officer', 'description': con, 'website': web},
		{ 'name.first': 'Phil', 'name.last': 'Glocker', 'position': 'Postgraduate Officer', 'description': con, 'website': web},
		{ 'name.first': 'Emmanuel', 'name.last': 'Vila', 'position': 'Head of Events and Communication', 'description': con, 'website': web, 'defaultImage': '/images/emmanuel.jpg',},
		{ 'name.first': 'Vladimir', 'name.last': 'Kardapoltsev', 'position': 'Chairman', 'description': con, 'website': web, 'defaultImage': '/images/vladimir.jpg',},
		{ 'name.first': 'Maxim', 'name.last': 'Rozhdov', 'position': 'Vice-Chairman', 'description': con, 'website': web, 'defaultImage': '/images/maxim.jpg',},
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
