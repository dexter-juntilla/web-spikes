module.exports = (function () {
 
	var mongoose = require('../../config/db').mongoose;
 
	var schema = {
		title: {type: String, required: true},
	};
	var collectionName = 'item';
	var itemSchema = mongoose.Schema(schema);
	var Item = mongoose.model(collectionName, itemSchema);
	
	return Item;
})();