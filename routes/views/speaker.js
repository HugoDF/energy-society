var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'speakers';
	locals.data = {
		speakers: []
	};
	
	// Load the posts
	view.on('init', function(next) {
		
		var q = keystone.list('Speaker').model.find({'type':'current'}).sort('sortOrder');
		
		q.exec(function(err, results) {
			locals.data.speakers = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('speakers');
};
