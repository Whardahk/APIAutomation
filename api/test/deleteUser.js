const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;

const token = "6207e156-745e-49c7-b547-2e6af629fee2";
const endpoint = "/api/users";
id = 189793;

//Not Working Either
//DELETE USER BY ID
describe(`DELETE ${endpoint}`, function () {
  it("delete user", async function () {
    const response = await request
      .delete(`${endpoint}/${id}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).to.eql(200);
    expect(response.body.id).to.eql(id);
    console.log(response.body);
  });
});

//GET USER BY ID
describe(`GET ${endpoint}`, function () {
  it("get user by id", async function () {
    const response = await request
      .get(`${endpoint}/${id}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).to.eql(200);
    console.log(response.body);
  });
});
