const express = require("express");

const smurfsRouter = require("../smurfs/smurfsRouter.js");

const server = express();

server.use(express.json());

server.use("/api/smurfs", smurfsRouter);

server.get("/", (req, res) => {
	res.status(200).json({ api: "running" });
});



module.exports = server;
