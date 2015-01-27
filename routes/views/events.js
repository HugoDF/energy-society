var keystone = require('keystone');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'events';
  locals.data = {
    events: []
  };

  view.on('init', function(next) {
    /*
    var q = keystone.list('Section').model.find({
      state: 'published',
    }).sort('sortOrder');

    q.exec(function(err, results) {
      next(err);
    });
    */
    next();
  });
  
  // Render the view
    view.render('events');
  };