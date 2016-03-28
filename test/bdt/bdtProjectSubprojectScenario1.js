/*
	Feature: Projects - SubProjects

	Story: Create a subproject
		As employee
		I want to create a subproject
		So I am able to organize and split my project in subprojects

	Scenario1:
	 		Given I have an empty project ‘Project A’	
			When I create a subproject ‘SubA’
			Then ensure the SubA’s ParentId is the same than ‘Project A’
				And ensure the project “SubA” is a “Project A”’s child
 */

//structure first way
describe('Feature: Projects - SubProjects',function(){
	context('Story: Create a subproject',function(){
		context('\t\tGiven I have an empty project \'Project A\'',function(){
			
			before(function(){
				//creating the project root	
			});
			context('\tWhen I create a subproject \'SubA\'',function(){
				before(function(){

				});

				describe('\tThen ensure the SubA\'s ParentId is the same than \'Project \A',function(){
					//assertions
					before(function(){
						//assertion verifyin the parentId
					});
					it('\tAnd ensure the project \'SubA\' is a \'Project A\'s child',function(){
					//assertions
					//
					});
				});
				

			});
		});
	});
});

//structure second way

describe('Feature: Projects - SubProjects',function(){
	context('Story: Create a subproject',function(){
		it('Given I have an empty project \'Project A\'',function(){
			//creates the project it is not needed to make assertions
		});

		it('When I create a subproject \'SubA\'',function(){
			//creates the subproject it is not needed to make assertions
		});
		
		it('Then ensure the SubA\'s ParentId is the same than \'Project \A',function(){
			//assertions
		});
		it('\tAnd ensure the project \'SubA\' is a \'Project A\'s child',function(){

		});
	});
});