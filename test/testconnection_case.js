const assert = require('assert');
const Animal = require('../models/char');

//Descibe test cases
describe('saving records', function(){
    it('saving data in database', function(done){
        var tiger = new Animal({
            name:'Tiger',
            weight: 80
        });
        tiger.save().then(function(){
            assert(tiger.isNew === false);
            done();
        });
    });
});