var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'committee';
	locals.data = {
		committee: []
	};
	
	// Load the posts
	view.on('init', function(next) {
		
		var q = keystone.list('CommitteeMember').model.find({'type':'current'}).sort('sortOrder');
		
		q.exec(function(err, results) {
			locals.data.committee = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('committee');
};
