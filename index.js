const subscription = require('./models/subscription');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/testcase',{ useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});

var demo = new subscription({
    subscription: 'demo',
    environment: [{environment: 'dev', domain: [{domain: 'dev-testomg'}, {domain: 'dev-testing1'}]}, {environment: 'stage', domain: [{domain: 'stage-testing'}, {domain: 'stage-testing1'}]}]
}); 

demo.save().then(function(){
    console.log('Values inserted');
});


//subscription.findOne({subscription: 'demo'}).then(function(result){
//    console.log(result.environment._id);
//});