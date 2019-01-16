const assert = require('assert');
const Animal = require('../models/char');

describe('Updating records', function(){

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

    it('update record in database', function(done){
        Animal.findOneAndUpdate({name: 'Lion'}, {name: 'Chitta'}).then(function(){
            Animal.findOne({_id: lion._id}).then(function(result){
                assert(result.name === 'Chitta');
                done();
            });
        });
    });

});