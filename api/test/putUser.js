const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;
const { cangedUser } = require("../data/userData");

const token = "2fa829a4-0fa7-43ae-9411-b4f3d129aa2c";
const endpoint = "/api/users";
const id = 189793;

describe(`PUT ${endpoint}`, function () {
  it("Update User Data", async function () {
    const response = await request
      .put(`${endpoint}/${id}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        id: id,
        name: cangedUser.name,
        email: cangedUser.email,
        location: cangedUser.location,
      });

    console.log(response.body);
    console.log(response.status);
    // expect(response.status).to.eql(201);
    // expect(response.body.name).to.eql(User.name);
    // expect(response.body.email).to.eql(User.email);
    // expect(response.body.location).to.eql(User.location);
    // console.log(response.body);
  });
});
