const assert = require('assert');
const Animal = require('../models/char');

describe('deleting records', function(){
    //Add record in database before each test case
    var lion;
    beforeEach(function(done){
        lion = new Animal({
            name: 'Lion'
        });
        lion.save().then(function(){
            done();
        });
    });

    //delete test case
    it('delete a record from database', function(done){
        Animal.findOneAndDelete({name: 'Lion'}, function(){
            Animal.findOne({name: 'Lion'}, function(result){
                assert(result === null);
                done();
            });
        });
    });
});