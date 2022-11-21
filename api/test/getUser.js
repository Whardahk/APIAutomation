const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;

const token = "a84ef2d8-25f8-4d1a-a632-bb19823eb1b6";
const endpoint = "/api/users";
const page = 10;

describe(`GET ${endpoint}`, function () {
  it("get user", async function () {
    const response = await request
      .get(`${endpoint}?page=${page}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).to.eql(200);
    expect(response.body.page).to.eql(page);
    console.log(response.status);
    console.log(response.body);
  });
  it("returns all users with invalid auth token", async function () {
    const response = await request
      .get(`${endpoint}?page=${page}`)
      .set({ Authorization: `${token}` });

    expect(response.status).to.eql(401);
  });
});
