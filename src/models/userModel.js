const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema ({
    email: {
        type: String,
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

