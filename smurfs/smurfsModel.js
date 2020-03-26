const db = require("../data/dbConfig.js");

module.exports = {
	insert,
	remove,
	getAll,
	findById
};

function insert(smurf) {
	return db("smurfs")
		.insert(smurf)
		.then(id => {
			return findById(id[0]);
		})
		.catch(err => {
			console.log(err);
		});
}

function remove(id) {
	return findById(id)
		.then(smurf => {
			return db("smurfs")
				.where({ id })
				.del()
				.then(() => {
					return smurf;
				})
				.catch(err => {
					console.log("from delete", err);
				});
		})
		.catch(err => {
			console.log("from findById", err);
		});
}

function getAll() {
	return db("smurfs");
}

function findById(id) {
	return db("smurfs")
		.where({ id })
		.first();
}
