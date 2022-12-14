const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;
const { User, bearer } = require("../data/userData");

const token = bearer.token;
const endpoint = "/api/users";

describe(`POST ${endpoint}`, function () {
  it("Create new user", async function () {
    const response = await request
      .post(endpoint)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: User.name,
        email: User.email,
        location: User.location,
      });

    expect(response.status).to.eql(201);
    expect(response.body.name).to.eql(User.name);
    expect(response.body.email).to.eql(User.email);
    expect(response.body.location).to.eql(User.location);
    console.log(response.body);
    //id = 189793
  });
});
