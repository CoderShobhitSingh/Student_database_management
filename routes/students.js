const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
    try {
        const { name, age, email, id } = req.body;
        if (!name || !age || !email || !id) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newStudent = new Student({ name, age, email, id });
        await newStudent.save();

        res.json({ message: "Student added successfully", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Error adding student", error });
    }
});

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student updated successfully', updatedStudent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findOneAndDelete({id: req.params.id});
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully', deletedStudent });
    } catch (error) {
        console.error("Delete Student Error:", error); // Log the error
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;