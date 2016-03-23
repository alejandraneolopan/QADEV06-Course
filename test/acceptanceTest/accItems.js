//accItems

var item = require('../../lib/itemLib');
var expect = require('chai').expect;

describe('Items',function(){

	this.timeout(5000);
	this.slow(4000);

	var itemId=-1;

    describe('CRUD Operations',function(){
    	afterEach('Delete the Item created',function(done){

            //making sure that there is a Item to delete
            if(itemId !== -1){
            	item.del(itemId,function(err,res){
                	//emptying the recycleBin
                    item.emptyRecycleBin(function(err, res){
                		done();
                	});
                });
            }
            else {done();}

        });

        it('POST /items.json creates an item',function(done){
            
            var itemJson = {
                Content:'Item-superagent',                
            };
            item.post(itemJson,function(err,res){

                itemId = res.body.Id;
                expect(res.status).to.equal(200);
                expect(res.body.Content).to.equal(itemJson.Content);
                expect(res.body.Deleted).to.equal(false);
                done();
            });
        });


        context('Read, Edit and Delete operations',function(){

			var preItemJson = {
                    Content:'Pre Item'

            };

            beforeEach('Creates item for the tests',function(done){
                
                item.post(preItemJson,function(err,res){
                    itemId = res.body.Id;
                    done();
                });
            });

            
            it('GET /Item by id returns an item',function(done){
                
                item.get(itemId,function(err,res){
                    expect(res.status).to.equal(200);
                    expect(res.body.Content).to.equal(preItemJson.Content);
                    done();

                });
            });

            it('PUT /item by id updates an item',function(done){
                
                var updateItemJson = {
                    Content:'Item Updated'
                };
                item.put(itemId,updateItemJson,function(err,res){
                    expect(res.status).to.equal(200);
                    expect(res.body.Content).to.equal(updateItemJson.Content);
                    done();
                });
            });

            it('DELETE /item by id deletes an item',function(done){
                
                item.del(itemId,function(err,res){
                    var idAux = id;
                    id=-1;//this is to avoid the afterEach is executed again

                    expect(res.status).to.equal(200);
                    expect(res.body.Id).to.equal(idAux);
                    expect(res.body.Content).to.equal(preItemJson.Content);
                    expect(res.body.Deleted).to.equal(true);
                    
                    //emptying the recycleBin
                	item.emptyRecycleBin(function(err, res){
                		done();
                	});

                });
            });
        });
    });
});