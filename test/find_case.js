const assert = require('assert');
const Animal = require('../models/char');

//test case to check if record is present in collection
describe('finding record', function(){
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

    it('finding record in database', function(done){
        Animal.findOne({name:'Lion'}).then(function(result){
            assert(result.name === 'Lion');
            done();
        });
    });

    it('finding record by unique id', function(done){
        Animal.findOne({_id: lion._id}).then(function(result){
            assert(result._id.toString() === lion._id.toString());
            done();
        });
    });
});