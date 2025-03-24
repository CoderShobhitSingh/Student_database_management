const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/student_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
