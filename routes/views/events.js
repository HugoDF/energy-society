var keystone = require('keystone'),
  async= require('async');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'events';
  locals.data = {
    events: []
  };

if(process.env.NODE_ENV == 'dev'){
  keystone.list('Event').model.find().where('date').lte(Date.now()).exec(function(err,results){
    var fact = 1;
    async.each(results, function(result, done){
      result.date= Date.now()+3600000000*fact;
      fact++;
      result.save();
      done(err);
    });
  });
}
  view.on('init', function(next) {
    
    var q = keystone.list('Event').paginate({
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
      }).where('date').gt(Date.now()).sort('date');
    
    q.exec(function(err, results) {
      locals.data.events = results;
      //console.log(locals.data.events);
      next(err);
    });
    
  });
  
  // Render the view
    view.render('events');
  };