const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let timerSchema = new Schema ({
    timer: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        // require: true
    }
});


module.exports = mongoose.model('Timer', timerSchema);

