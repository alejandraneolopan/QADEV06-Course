//projects.js

var request = require('superagent');
require('superagent-proxy')(request);

var config = require('..//config.json');

var projectsURL = config.projectsURL; 
var projectURLById;
var proxy = config.proxy;
var account = config.account;
var password = config.password;



var post = function(projectJson,callback){
	request
        .post(projectsURL)
        .proxy(proxy)
        .auth(account,password)
        .send(projectJson)
        .end(function(err,res){
            callback(err,res);
	});
};
exports.post = post;

var put = function(projectId,projectUpdateJson,callback){
	setProjectURLById(projectId);

	request
	    .put(projectURLById)
	    .proxy(proxy)
	    .auth(account,password)
	    .send(projectUpdateJson)
	    .end(function(err,res){
	    	callback(err,res);
	    });
};
exports.put = put;

var get = function(projectId,callback){
	setProjectURLById(projectId);

	request
	    .get(projectURLById)
	    .proxy(proxy)
	    .auth(account,password)
	    .end(function(err,res){
	    	callback(err,res);
	    });
};
exports.get=get;

var del = function(projectId,callback){

	setProjectURLById(projectId);
	
	request
		.del(projectURLById)
	    .proxy(proxy)
	    .auth(account,password)
    .end(function(err,res){
    	
    	callback(err, res);
	});

};
exports.del = del;

var setProjectURLById = function(projectId){
	projectURLById = config.projectURLById.replace('[id]',projectId);

};