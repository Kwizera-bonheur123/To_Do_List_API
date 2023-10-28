process.env.NODE_ENV = "test";

import { expect } from "chai";
import { should } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import chai from "chai";


chai.use(chaiHttp);

describe("/First test collection", function(){

    it("test the default api route", function(done){
        chai.request(app)
        .get("/")
        .end((err,res) => {
            expect(res).to.have.status(200);
            expect(res.body.message).to.be.a("string");
            const actualVal = res.body.message;
            expect(actualVal).to.be.equal("hello you are welcomed");
            done();
        });
    })


    it("Should test value of two valiables", function(){
        let expectedValue = 10;
        let actualValue = 10;
        expect(actualValue).to.be.equal(expectedValue)
    })
})