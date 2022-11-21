const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;

describe("POST /api/authaccount/registration", function () {
  it("register new user auth", async function () {
    const response = await request.post("");
  });
});
