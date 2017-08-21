const chai = require('chai');
chai.should();

const kafka = require('kafka-node');
const HighLevelProducer = kafka.HighLevelProducer;
const client = new kafka.Client();
const producer = new HighLevelProducer(client);

describe('Kafka Travis Test Case', function() {
	before(function(done) {
		this.timeout(10000);
		producer.on('ready', function() {
			console.log('done');
			done();
		});
		producer.on('error', function(err) {
			done(err);
		})
	});

	it('should produce', function(done) {
		producer.send([{topic: 'dev_activities', messages: ['Hello, Kafka']}], done);
	});

	/*it('should consume', function(done) {

	});*/
});