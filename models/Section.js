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
	state: { type: Types.Select, options: 'hidden, published', default: 'published', index: true },
	image: { type: Types.CloudinaryImage, autoCleanup:true },
	content: {type: Types.Html, wysiwyg: true, height: 400 },
	redirectURL: {type: Types.Url, hidden:true},
  defaultImage: { type: Types.Url, hidden: true},
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

Section.defaultColumns = 'title, state|20%';
Section.register();
