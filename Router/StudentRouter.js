const express = require('express');
const router = express.Router();
const controller = require('../Controller/StudentController');

router.get("/api/student/",controller.getAllStudents)
router.post("/api/student/register",controller.RegisterStudent)

module.exports = router;