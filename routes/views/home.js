var keystone = require('keystone'),
_ = require('underscore');

function makeURL(obj){
  if(obj.redirectURL){
    URL = obj.redirectURL;
  }
  else{
    URL = '/section/'+obj.slug;
  }
  return URL;
}
exports = module.exports = function(req, res) {
  var q = keystone.list('Section').model.find({
    state: 'published',
  }).sort('sortOrder');

  q.exec(function(err, results) {
    var homepage =_.filter(results, function(obj){return obj.isHomepage;});
    if(homepage.length===1){
      res.redirect(makeURL(homepage[0]));
    }
    else{
      res.redirect(makeURL(results[0]));
    }
  });
};