const express = require('express');
const router = express.Router();
const controller = require('../Controller/eventController');

router.post("/api/event/create",controller.createEvent)
router.get("/api/event/",controller.getAllevents)
router.put("/api/event/:id",controller.editEvent)
router.delete("/api/event/:id",controller.deleteEvent)

module.exports = router;