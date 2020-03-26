const express = require("express");
const Smurfs = require("../smurfs/smurfsModel.js");
const router = express.Router();

router.get("/", (req, res) => {
	Smurfs.getAll()
		.then(smurfs => {
			res.status(200).json(smurfs);
		})
		.catch(error => {
			res.status(500).json({ error: "error fetching smurfs", error });
		});
});

router.get("/:id", (req, res) => {
	Smurfs.findById(req.params.id)
		.then(smurf => {
			res.status(200).json(smurf);
		})
		.catch(error => {
			res.status(500).json({ error: "error fetching smurfs", error });
		});
});

router.post("/", (req, res) => {
	Smurfs.insert(req.body)
		.then(smurf => {
			res.status(201).json(smurf);
		})
		.catch(error => {
			res.status(500).json({ error: "error posting smurf", error });
		});
});

router.delete("/:id", (req, res) => {
	Smurfs.remove(req.params.id)
		.then(removed => {
			res.status(200).json({ message: `successfully removed ${removed.name}` });
		})
		.catch(error => {
			res.status(500).json({ error: "error deleting smurf", error });
		});
});
module.exports = router;
