const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;
const { USER_DATA } = require("../data/userData");

const endpoint = "/api/authaccount/login";

describe(`POST ${endpoint}`, function () {
  it("Login with valid email & password", async function () {
    const response = await request.post(endpoint).send({
      email: USER_DATA.email,
      password: USER_DATA.password,
    });

    expect(response.status).to.eql(200);
    expect(response.body.code).to.eql(0);
    expect(response.body.data.Name).to.eql(USER_DATA.name);
    expect(response.body.data.Email).to.eql(USER_DATA.email);

    const token = response.body.data.Token;
    console.log(token);
    console.log(response.body.data.Id);
  });
  it("login with invalid username", async function () {
    const response = await request.post(endpoint).send({
      email: "halo",
      password: USER_DATA.password,
    });

    expect(response.status).to.eql(200);
    expect(response.body.code).to.eql(1);
  });
  it("login with invalid password", async function () {
    const response = await request.post(endpoint).send({
      email: USER_DATA.email,
      password: "password",
    });

    expect(response.status).to.eql(200);
    expect(response.body.code).to.eql(1);
  });
});
