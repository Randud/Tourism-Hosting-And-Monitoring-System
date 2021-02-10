const mongoose = require('mongoose');

const helpCenterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    centerName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true }
});

module.exports = mongoose.model('helpCenter', helpCenterSchema);