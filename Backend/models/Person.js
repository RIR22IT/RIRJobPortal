const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

})

const Person = mongoose.model("Person", personSchema);

module.exports = Person;