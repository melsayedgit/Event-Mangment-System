const express = require('express');
const router = express.Router();
const controller = require('../Controller/StudentController');

router.post("/api/student/register",controller.RegisterStudent)
router.get("/api/student/",controller.getAllStudents)
router.put("/api/student/:id",controller.editStudent)
router.delete("/api/student/:id",controller.deleteStudent)

module.exports = router;