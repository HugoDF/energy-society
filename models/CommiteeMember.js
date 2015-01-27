var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var CommiteeMember = new keystone.List('CommiteeMember', {
  map: { name:'name' },
  autokey: { path: 'slug', from: 'name', unique: true},
  sortable: true,
});

CommiteeMember.add({
	name: { type: Types.Name, required: true, index: true },
  type: { type: Types.Select, options: 'current, past, hidden', default: 'current', index: true},
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	website: { type: Types.Url},
});

/**
 * Registration
 */

CommiteeMember.defaultColumns = 'name, type|20%';
CommiteeMember.register();
