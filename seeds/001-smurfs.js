exports.seed = async function(knex) {
	// Deletes ALL existing entries
	const smurfData = [
		{ name: "Papa Smurf" },
		{ name: "Smurfette" },
		{ name: "Grouchy Smurf" },
		{ name: "Clumsy Smurf" },
		{ name: "Brainy Smurf" },
	];

	await knex("smurfs").truncate();
	return knex("smurfs").insert(smurfData);
};
