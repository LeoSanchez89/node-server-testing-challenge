exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("smurfs")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("smurfs").insert([
				{ name: "Papa Smurf" },
				{ name: "Smurfette" },
				{ name: "Grouchy Smurf" },
				{ name: "Clumsy Smurf" },
				{ name: "Brainy Smurf" }
			]);
		});
};
