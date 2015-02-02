var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Section = new keystone.List('Section', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
  sortable: true,
});

Section.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'hidden, published, draft', default: 'published', index: true },
	image: { type: Types.CloudinaryImage, autoCleanup:true },
  redirectURL: {type: Types.Url, hidden:true},
	content: {type: Types.Html, wysiwyg: true, height: 400},
  defaultImage: { type: Types.Url, hidden: true},
  homepage: {type: Types.Select, options: 'true' ,index:{sparse:true, unique:true}},
});


Section.schema.virtual('isHomepage').get(function(){
  if(this.homepage==='true'){
    return true;
  }
  else{
    return false;
  }
});
Section.schema.virtual('hasRedirect').get(function() {
  if(this.redirectURL){
    return true;
  }
  else{
    return false;
  }
});

Section.schema.virtual('hasDefaultImage').get(function(){
  if(this.defaultImage){
    return true;
  }
  else{
    return false;
  }
});

Section.defaultColumns = 'title, state, homepage';
Section.register();
