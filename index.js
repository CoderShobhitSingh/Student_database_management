const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./database/db');
const studentsRoutes = require('./routes/students');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

connectDB();

app.use('/students', studentsRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
