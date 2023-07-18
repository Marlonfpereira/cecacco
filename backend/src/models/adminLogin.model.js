const mongoose = require('mongoose');

const adminLogin = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, 
{
    collection:'loginAdmin'
}
);

module.exports = mongoose.model('Login', adminLogin);

