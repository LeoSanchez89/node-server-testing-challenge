const express = require("express");
const Smurfs = require("../smurfs/smurfsModel.js");
const router = express.Router();

router.get("/", (req, res) => {
	Smurfs.getAll()
		.then(smurfs => {
			res.status(200).json(smurfs);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = router;