var itemController = require('../controllers/item');

module.exports = function(app) {
	app.get('/item/all', itemController.all);
	app.get('/item/create', itemController.create);
};