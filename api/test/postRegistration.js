const { baseUrl } = require("../data/baseUrl");
const request = require("supertest")(baseUrl);
const expect = require("chai").expect;
const { USER_DATA } = require("../data/userData");

const endpoint = "/api/authaccount/registration";

describe(`POST ${endpoint}`, function () {
  it("register new valid user auth", async function () {
    const response = await request.post(endpoint).send({
      name: USER_DATA.name,
      email: USER_DATA.email,
      password: USER_DATA.password,
    });

    // console.log(response.body.code);
    // console.log(response.body.data.Name);
    // console.log(response.body.data.Email);
    // console.log(response.body.data.Token);
    // console.log(response.status);

    expect(response.status).to.eql(200);
    expect(response.body.code).to.eql(0);
    expect(response.body.data.Name).to.eql(USER_DATA.name);
    expect(response.body.data.Email).to.eql(USER_DATA.email);

    // const token = response.body.data.Token;
    // console.log(token);
    // module.exports = { token };
  });
  it("register with same email user auth", async function () {
    const response = await request.post(endpoint).send({
      name: USER_DATA.name,
      email: USER_DATA.email,
      password: USER_DATA.password,
    });

    expect(response.status).to.eql(200);
    expect(response.body.code).to.eql(1);
  });
});
