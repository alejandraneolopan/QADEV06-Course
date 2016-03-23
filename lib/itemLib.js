//itemlib


var request = require('superagent');
require('superagent-proxy')(request);

var config = require('..//config.json');

var itemsURL = config.itemsURL; 
var recycleBin = config.recycleBin;
var itemsURLById;

var proxy = config.proxy;
var account = config.account;
var password = config.password;

var post = function(itemJson,callback){
	request
        .post(itemsURL)
        //.proxy(proxy)
        .auth(account,password)
        .send(itemJson)
        .end(function(err,res){
            callback(err,res);
	});
};
exports.post = post;

var put = function(itemId,itemUpdateJson,callback){
	setItemsURLById(itemId);

	request
	    .put(itemsURLById)
	    //.proxy(proxy)
	    .auth(account,password)
	    .send(itemUpdateJson)
	    .end(function(err,res){
	    	callback(err,res);
	    });
};
exports.put = put;

var get = function(itemId,callback){
	setItemsURLById(itemId);

	request
	    .get(itemsURLById)
	    //.proxy(proxy)
	    .auth(account,password)
	    .end(function(err,res){
	    	callback(err,res);
	    });
};
exports.get=get;

var del = function(itemId,callback){
	setItemsURLById(itemId);

	request
		.del(itemsURLById)
	    //.proxy(proxy)
	    .auth(account,password)
    .end(function(err,res){
    	callback(err, res);
	});

};
exports.del = del;

var emptyRecycleBin = function(callback){
	request
		.del(recycleBin)
		//.proxy(proxy)
    	.auth(account,password)
	.end(function(err, res){
		callback(err,res);
	});
}
exports.emptyRecycleBin = emptyRecycleBin;

var setItemsURLById = function(itemId){
	itemsURLById = config.itemsURLById.replace('[id]',itemId);

};