const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
//const app = require('../app');
const express = require('express');
const app = express();
//const Home = mongoose.model('home');
const Home = require('../templates/Models/Home');
const describe = require('mocha');

describe('Homes controller', () => {
  it('Post to /api/homes creates a new home', (done) => {

    const lqHome320 = new Home({
      address_number: '320',
      street_name: 'Lakeshore Drive',
      street_direction: 'S',
      dock_number: '116',
      county: 'Johnson',
    });
    lqHome320.save();
  });
});

//    const lqHome418 = new Home({
//      address_number: '418',
//      street_name: 'Mohawk Drive',
//      street_direction: 'E',
//      dock_number: '222',
//      county: 'Johnson',
//    });

//    Driver.count().then(count => {
//      request(app)
//        .post('/api/homes')
//        ([lqHome320.send(), lqHome418.send()])
//        .end(() => {
//          Home.count().then(newCount => {
//            assert(count + 1 === newCount);
//            done();
//          });
//        });
//    });
//  });


//    Promise.all([lqHome320.save(), lqHome418.save()])
//      .then(() => {
//        request(app)
//          .get('/api/homes?street_number=320')
//          .end((err, response) => {
//            assert(response.body.length === 1);
//            assert(response.body[0].obj.email === 'miami@test.com');
//            done();
//          });
//      });
//  });
