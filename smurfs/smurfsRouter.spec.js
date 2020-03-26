const request = require("supertest");

const server = require("../api/server.js");

describe("smurfsRouter.js", function() {
	const expected = [
		{ id: 1, name: "Papa Smurf" },
		{ id: 2, name: "Smurfette" },
		{ id: 3, name: "Grouchy Smurf" },
		{ id: 4, name: "Clumsy Smurf" },
		{ id: 5, name: "Brainy Smurf" }
	];

	describe("GET /", function() {
		it("should return 200 ok", function() {
			return request(server)
				.get("/api/smurfs")
				.expect(200);
		});

		it("should return JSON", function() {
			return request(server)
				.get("/api/smurfs")
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});

		it("should return length of 5", function() {
			return request(server)
				.get("/api/smurfs")
				.then(res => {
					expect(res.body.length).toBe(5);
				});
		});

		it("should match seed data", function() {
			return request(server)
				.get("/api/smurfs")
				.then(res => {
					expect(res.body).toEqual(expect.arrayContaining(expected));
				});
		});
	});

	describe("POST /", function() {
		it("should return 201 ok AND return JSON", function() {
			return request(server)
				.post("/api/smurfs")
				.send({ name: "Sleepy Smurf" })
				.then(res => {
					expect(res.status).toBe(201);
					expect(res.type).toMatch(/json/i);
				});
		});
	});

	describe("DELETE /:id", function() {
		it("should return 200 ok AND return JSON", function() {
			return request(server)
				.delete("/api/smurfs/6")
				.then(res => {
					expect(res.status).toBe(200);
					expect(res.type).toMatch(/json/i);
				});
		});
	});
});


