var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Speaker = new keystone.List('Speaker', {
  map: { name:'name' },
  autokey: { path: 'slug', from: 'name', unique: true},
  sortable: true,
});

Speaker.add({
	name: { type: Types.Name, required: true, index: true },
  type: { type: Types.Select, options: 'current, hidden', default: 'current', index: true},
	image: { type: Types.CloudinaryImage, autoCleanup:true },
  position: { type: Types.Html, wysiwig: true, height: 40 },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	website: { type: Types.Url},
  defaultImage: { type: Types.Url, hidden:true},
});

/**
 * Registration
 */

Speaker.defaultColumns = 'name, position, type';
Speaker.register();
