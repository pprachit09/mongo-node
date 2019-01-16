const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Subscription model
//Subscription -> Environment -> Domain

//Starting with domain schema
const domainSchema = new Schema({
    domain: String
});

//Environment Schema
const EnvironmentSchema = new Schema({
    environment: String,
    domain: [domainSchema]
});

const SubscriptionSchema = new Schema({
    subscription: String,
    environment: [EnvironmentSchema]
});

const subscription = mongoose.model('subscription', SubscriptionSchema);

module.exports = subscription;