const chai = require('chai');
chai.should();

const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'testdb'});

describe('Cassandra Travis test case', function() {
	it('Should add another circle', function(done) {
		const query = 'insert into circleA (circleId) values (a64c15d0-8635-11e7-bb31-be2e44b06b34)';
		client.execute(query).then(function() { done() }, function(err) { done(err); });
	});

	it('Should retrieve circle', function(done) {
		const query = 'select circleId from circleA where circleId=a64c15d0-8635-11e7-bb31-be2e44b06b34';
		client.execute(query).then(function(res) {
			res.rows[0].circleid.toString().should.be.equal('a64c15d0-8635-11e7-bb31-be2e44b06b34');
			done();
		}, function(err) { done(err); });
	});
});
