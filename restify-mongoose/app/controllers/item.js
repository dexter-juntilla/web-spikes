var Item = require('../models/item');

module.exports = {
	all: function (req, res, next) {
		Item.find({}, function (errItem, itemResults) {
			res.json(itemResults);
		});
	},

	create: function (req, res, next) {
		Item.create({"title": "test"}, function (errCreateItem, newItem) {
			res.json(newItem);
		});
	}
}