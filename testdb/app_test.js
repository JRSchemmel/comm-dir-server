const assert = require('assert');
const request = require('supertest');
const describe = require('mocha')
const path = require('path');
console.log("path.join()app_test: ", path.join(__dirname));
const express = require('express');
const app = express();
//const app = require('app');
//const app = require('/app_test');

//describe('the express App', () => {
//  it('handles a request to root route', (done) => {
//    request(app)
//      .get('/')
//      .end((err, response) => {
//        assert(response.body.hi === 'there');
//        done();
//      });
//  });
//});

module.exports = app;