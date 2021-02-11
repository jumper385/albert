const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/test`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err) => {
	if(err){
		throw err;
	} else {
		console.log('successful db connection');
	}
});

// DATABASE INTERFACE FUNCIONS
const queryCollection = async (schema, query) => {
	// Queries the schema and finds the data
	return await schema.find(query);
};

const postCollection = async (schema, body) => {
	// posts a new document
	if(body.length == undefined) return await schema.create(body);
	if(body.length > 1) return await schema.insertMany(body);
};

const deleteCollection = async (schema, query) => {
	// finds and deletes based on a query
	return await schema.find(query).remove();
};

const editCollection = async (schema, query, delta) => {
	// finds and edits based on a query
	return await schema.find(query).updateMany({
		$set: {
			...delta
		}
	});
};

module.exports = {
    queryCollection, 
    postCollection,
    deleteCollection,
    editCollection
}