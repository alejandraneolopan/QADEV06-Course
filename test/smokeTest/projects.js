var expect = require('chai');
var request = require('superagent');
require('superagent-proxy')(request);

describe('Projects',function(){

	it('GET /projects.json return status code 200',function(){
		request
			.get()
			//.proxy()
			.auth()
		.end(function(err,res){
			console.log(res.status)
			expect(res.status).to.be.below(500);
		});
	});

	it('GET /projects/[id].json return status code 200',function(){});
});