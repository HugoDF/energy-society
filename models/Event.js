var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Event.add({
	title: { type: String, required: true },
	date: {type: Types.Date, index: true},
	location: { type: String },
	facebookLink: {type: Types.Url, index: true},
	image: { type: Types.CloudinaryImage, autoCleanup:true},
	content: {type: Types.Html, wysiwyg: true, height: 400 },
});

Event.defaultColumns = 'title, date, location';
Event.register();
