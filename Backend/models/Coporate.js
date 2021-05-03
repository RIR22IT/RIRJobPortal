const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coporateSchema = new Schema({

    companyName: {
        type: String,
        required: true
    },

    establishedOn: {
        type: Date,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    corporateEmail: {
        type: String,
        required: true
    },

    corporateAddress: {
        type: String,
        required: true
    },

    corporatePassword: {
        type: String,
        required: true
    },

})

const Coporate = mongoose.model("Coporate", coporateSchema);

module.exports = Coporate;