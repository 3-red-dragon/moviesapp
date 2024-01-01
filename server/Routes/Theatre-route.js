const express = require('express');
const router = express.Router();
const Theatre = require('../Models/Theatre')
const theatreController = require('../Controllers/Theatre-controllers');
const { route } = require('express/lib/application');

router.get('/', theatreController.getAllTheatres);
router.post('/', theatreController.addTheatre);
router.get('/:id', theatreController.getById);
router.put('/:id', theatreController.updateTheatre );
router.delete('/:id', theatreController.deleteTheatre)
module.exports = router;