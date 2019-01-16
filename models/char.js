const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//Crease Schema and models

const AnimalSchema = new Schema({
    name: String,
    weight: Number
});

const Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal