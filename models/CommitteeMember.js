var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var CommitteeMember = new keystone.List('CommitteeMember', {
  map: { name:'name' },
  autokey: { path: 'slug', from: 'name', unique: true},
  sortable: true,
});

CommitteeMember.add({
	name: { type: Types.Name, required: true, index: true },
  type: { type: Types.Select, options: 'current, past, hidden', default: 'current', index: true},
	image: { type: Types.CloudinaryImage, autoCleanup:true},
  position: { type: Types.Html, wysiwig: true, height: 40 },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	website: { type: Types.Url},
  defaultImage: { type: Types.Url, hidden:true},
});

/**
 * Registration
 */

CommitteeMember.defaultColumns = 'name, position, type';
CommitteeMember.register();
