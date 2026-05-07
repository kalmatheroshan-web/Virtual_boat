const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    assitantName: {
        type: String
    },
    assitantImage: {
        type: String
    },
    history: [String],
 
}, { timestamps: true });

const userModal = new mongoose.model('user', userSchema);

module.exports = userModal;