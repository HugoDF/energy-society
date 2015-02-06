var keystone = require('keystone');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // Set locals
  locals.section = 'events';
  locals.filters = {
    event: req.params.event
  };
  locals.data = {
    event: []
  };
  
  // Load the current post
  view.on('init', function(next) {
    
    var q = keystone.list('Event').model.findOne({
      slug: locals.filters.event
    });
    
    q.exec(function(err, result) {
      locals.data.event = result;
      next(err);
    });
    
  });
  
  // Render the view
  view.render('event');
  
};
