const mongoose = require('mongoose');

const touristSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    passportId: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    note: { type: String, required: true }
});

module.exports = mongoose.model('tourist', touristSchema);