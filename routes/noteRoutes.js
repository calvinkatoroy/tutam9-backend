// backend/routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);
router.delete('/:id', noteController.deleteNote);

module.exports = router;