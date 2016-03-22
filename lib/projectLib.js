//project lib

var request = require('../node_modules/superagent');
require('../node_modules/superagent-proxy')(request);

var account = 'gordines007@gmail.com';
var password = 'control123';
var proxy = 'http://172.20.240.5:8080';
var projectById = 'http://todo.ly/api/projects/[id].json'

var del = function(projectId,callback){
	projectId = projectById.replace('[id]',projectId);

	request
		.del(projectId)
        .proxy(proxy)
        .auth(account,password)
    .end(function(err,res){
    	console.log(res.body.Content);
    	callback(err, res);

    });

};
exports.del = del;



