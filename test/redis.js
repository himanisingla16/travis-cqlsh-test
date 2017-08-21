const redis = require('thunk-redis');
const client = redis.createClient({database: 1, usePromise: true});
const chai = require('chai');
chai.should();

describe('Redis Travis Test Case', function() {

  it('should create list b', function(done) {
  	client.set('z', '20').then(function() {
  		done();
  	});
  });

  it('should retrieve data from list b', function(done) {
  	client.get('z').then(function(reply) {
  	  reply.should.be.equal('20');
  	  done();
  	});
  });
});
