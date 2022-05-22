const express = require('express');
const router = express.Router();
const controller = require('../Controller/SpeakerController');

router.get("/api/Speaker/",controller.getAllSpeakers);
router.post("/api/Speaker/register",controller.Registerspeaker);
router.put("/api/Speaker/:username",controller.editSpeaker);
router.delete("/api/Speaker/:username",controller.deletespeaker);

module.exports = router;