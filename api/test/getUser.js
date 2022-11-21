const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;

const token = "3c42a950-d6e1-4991-9f72-7c783e87d6ab";
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
id = 189784;
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
