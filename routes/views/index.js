var keystone = require('keystone'),
_ = require('underscore');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		sections: []
	};

	view.on('init', function(next) {
		
		var q = keystone.list('Section').model.find({
			state: 'published',
		}).sort('sortOrder');

		q.exec(function(err, results) {
			locals.data.sections = _.filter(results, function(obj){return !obj.hasRedirect;});
			next(err);
		});
		
	});
	
	// Render the view
	view.render('index');
	
};
