const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

let userSchema = new Schema ({
    email: {
        type: mongoose.SchemaTypes.Email,
        correctTld: true,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: "Le contenu est requis"
    },
    role: {
        type : Boolean,
        required: "Le contenu est requis"
    }
});


module.exports = mongoose.model('User', userSchema);

