const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;
const { bearer } = require("../data/userData");

const token = bearer.token;
const endpoint = "/api/users";
const page = 10;

describe(`GET ${endpoint}`, function () {
  it("get user", async function () {
    const response = await request
      .get(`${endpoint}?page=${page}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).to.eql(200);
    expect(response.body.page).to.eql(page);
    console.log(response.body);
  });
  it("returns all users with invalid auth token", async function () {
    const response = await request
      .get(`${endpoint}?page=${page}`)
      .set({ Authorization: `${token}` });

    expect(response.status).to.eql(401);
  });
});

//GET USER BY ID
id = 189793;
describe(`GET ${endpoint}`, function () {
  it("get user by id", async function () {
    const response = await request
      .get(`${endpoint}/${id}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).to.eql(200);
    expect(response.body.id).to.eql(id);
    console.log(response.body);
  });
});
