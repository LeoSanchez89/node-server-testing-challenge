const request = require("supertest");

const router = require("./smurfsRouter.js");

describe("smurfsRouter.js", function() {
    
    describe("GET /", function () {

        it("should return 200 ok", function () {
            return request(router).get("/").expect(200);
        });

		it.todo("should return JSON");
		it.todo(
            'should respond with [{"id": 1, "name": "Papa Smurf"},{ "id": 2, "name": "Smurfette" },{ "id": 3, "name": "Grouchy Smurf" },{ "id": 4, "name": "Clumsy Smurf" },{ "id": 5, "name": "Brainy Smurf" }]'
		);
    });
    
    describe("POST /", function () {
        it.todo("should return 201 ok");
        it.todo("should return JSON");

    })

    describe("DELETE /:id", function () {
        it.todo("should return 200 ok");
        it.todo("should return JSON");
    })
});


// 'should respond with [{"id": 1, "name": "Papa Smurf"},{ "id": 2, "name": "Smurfette" },{ "id": 3, "name": "Grouchy Smurf" },{ "id": 4, "name": "Clumsy Smurf" },{ "id": 5, "name": "Brainy Smurf" }]'