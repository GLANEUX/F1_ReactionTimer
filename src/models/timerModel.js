const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timerSchema = new Schema({
    timer: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
}); 

module.exports = mongoose.model('Timer', timerSchema);

