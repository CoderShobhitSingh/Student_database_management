const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Student', studentSchema);
