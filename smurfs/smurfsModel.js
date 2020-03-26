const db = require("../data/dbConfig.js");

module.exports = {
	insert,
	update,
	remove,
	getAll,
	findById
};

async function insert(smurfs) {
	return null;
}

async function update(id, changes) {
	return null;
}

function remove(id) {
	return null;
}

function getAll() {
	return db("smurfs");
}

function findById(id) {
	return null;
}
