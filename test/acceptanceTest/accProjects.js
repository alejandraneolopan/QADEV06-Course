//Acceptance tests for Projects 
// Executing CRUD operations

var expect = require('chai').expect;

var projects = require('..//..//lib//projectLib');

describe('Projects',function(){

	this.timeout(5000);
	this.slow(4000);

	var id=-1;

    describe('CRUD Operations',function(){
    	afterEach('Delete the project created',function(done){

            //making sure that the projecs will be deleted
            if(id != -1){
                projects
                .del(id,function(err, res){
                    done();
                });
            }else {done();}

            

        });

        it('POST /project.json creates a project',function(done){
            
            var prjJson = {
                Content:'SuperAgentProxy',
                Icon:4
            };

            projects
            .post(prjJson,function(err,res){
                id = res.body.Id;
                expect(res.status).to.equal(200);
                expect(res.body.Content).to.equal(prjJson.Content);
                expect(res.body.Icon).to.equal(prjJson.Icon);
                expect(res.body.Deleted).to.equal(false);

                done();
            });
        });


        context('Read, Edit and Delete operations',function(){

			var preJson = {
                    Content:'Pre Project',
                    Icon:4
            };

            beforeEach('Creates project for the tests',function(done){
                
                projects
                .post(preJson,function(err,res){
                    id = res.body.Id;
                    done();
                });
                
            });

            
            it('GET /project by id returns a project',function(done){
                
                projects
                .get(id,function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.body.Content).to.equal(preJson.Content);
                    expect(res.body.Icon).to.equal(preJson.Icon);
                    done();
                });
            });

            it('PUT /project by id updates a project',function(done){
                
                var updateJson = {
                    Content:'Project Updated',
                    Icon:8
                };

                projects
                .put(id,updateJson,function(err,res){
                    expect(res.status).to.equal(200);
                    expect(res.body.Content).to.equal(updateJson.Content);
                    expect(res.body.Icon).to.equal(updateJson.Icon);
                    done();
                });
            });

            it('DELETE /project by id deletes a project',function(done){
                
                projects
                .del(id,function(err,res){
                    var idAux = id;
                    id=-1;//this is to avoid the afterEach is executed again

                    expect(res.status).to.equal(200);
                    expect(res.body.Id).to.equal(idAux);
                    expect(res.body.Content).to.equal(preJson.Content);
                    expect(res.body.Icon).to.equal(preJson.Icon);
                    expect(res.body.Deleted).to.equal(true);
                    
                    done();
                });              
            });
        });
    });
});