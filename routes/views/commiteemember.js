var keystone = require('keystone'),
	_ = require('underscore');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'commitee';
	locals.filters = {
		member: req.params.member
	};
	locals.data = {
		member: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('CommiteeMember').model.findOne({
			type: 'current',
			slug: locals.filters.member
		});
		q.exec(function(err, result) {
			locals.data.member = result;
			next(err);
		});
		
	});
	// Render the view
	view.render('commiteemember');
	
};
