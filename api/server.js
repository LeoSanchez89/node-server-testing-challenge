const express = require("express");

const Smurfs = require("../smurfs/smurfsModel.js");;

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).json({ api: "running" });
});

server.get("/smurfs", (req, res) => {
	Smurfs.getAll()
		.then(smurfs => {
			res.status(200).json(smurfs);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = server;
