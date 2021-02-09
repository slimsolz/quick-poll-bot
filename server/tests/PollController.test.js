import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import "babel-polyfill";

const { expect } = chai;
chai.use(chaiHttp);

describe("GET /polls", () => {
  it("should return 200 and a successfully retrieve all polls", () => {
    chai
      .request(app)
      .get("/api/v1/polls")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.equal("success");
        expect(res.body.message).to.equal("poll retrieved successfully");
        expect(res.body.data).to.be.an("array");
        done();
      });
  });
});

describe("DELETE /polls", () => {
  it("should return 200 and a successfully delete all polls", () => {
    chai
      .request(app)
      .delete("/api/v1/polls")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.equal("success");
        expect(res.body.message).to.be.equal("polls deleted successfully");
        expect(res.body.data).to.be.an("array");
        done();
      });
  });
});
