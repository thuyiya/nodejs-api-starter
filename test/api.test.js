/* eslint-disable */

import * as chai from 'chai';
import * as should from 'should';
import * as request from 'request';
import * as util from 'util';
let expect = chai.expect

const BaseUrl = 'http://localhost:3000/v1';

describe('Check Api', () => {
  // beforeEach((done) => {
  //     done();
  // });

  describe('/GET Api', () => {
    it('it should GET success message with code 2000', (done) => {
      request.get({ url: BaseUrl }, (err, res, body) => {
        var bodyObj = JSON.parse(body);
        expect(res.statusCode).to.equal(200);
        console.log(body);
        done();
      });
    });
  });
});
