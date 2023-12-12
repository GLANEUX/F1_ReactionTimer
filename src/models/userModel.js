const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema ({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    password: {
        type : String,
        required: true
    },
    role: {
        type : Boolean,
        required: "Le rôle est requis"
    }
});


module.exports = mongoose.model('User', userSchema);

