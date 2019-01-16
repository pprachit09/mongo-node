const assert = require('assert');
const Animal = require('../models/char');

describe('Updating records', function(){

    //Add record in database before each test case
    var lion;
    beforeEach(function(done){
        lion = new Animal({
            name: 'Lion',
            weight: 60
        });
        lion.save().then(function(){
            done();
        });
    });
    //update record in d{atabase
    it('update record in database', function(done){
        Animal.findOneAndUpdate({name: 'Lion'}, {name: 'Chitta'}).then(function(){
            Animal.findOne({_id: lion._id}).then(function(result){
                assert(result.name === 'Chitta');
                done();
            });
        });
    });

    //increament weight property by 1 
    it('increament weight property by 1', function(done){
        Animal.updateMany({}, {$inc: {weight: 1} }).then(function(){
            Animal.findOne({name: 'Lion'}).then(function(result){
                assert(result.weight === 61);
                done();
            });
        });
    });

});