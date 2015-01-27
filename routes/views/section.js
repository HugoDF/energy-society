var keystone = require('keystone'),
	_ = require('underscore');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = req.params.section;
	locals.filters = {
		section: req.params.section
	};
	locals.data = {
		section: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Section').model.findOne({
			state: 'published',
			slug: locals.filters.section
		});
		q.exec(function(err, result) {
			locals.data.section = result;
			next(err);
		});
		
	});
	// Render the view
	view.render('section');
	
};
