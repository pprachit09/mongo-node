const mongoose = require('mongoose');

//connect to mongodb
before(function(done){

    mongoose.connect('mongodb://localhost/testcase',{ useNewUrlParser: true });
    mongoose.set('useFindAndModify', false);
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

});

// Drop the characters collection before each test
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.animals.drop(function(){
        done();
    });
});