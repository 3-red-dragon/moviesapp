const express = require('express');
const router = express.Router();
const Movie = require('../Models/Movie')
const movieController = require('../Controllers/Movie-controllers');
const { route } = require('express/lib/application');
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getById);
router.get('/:id/trailer',movieController.getById);
router.post('/:id', movieController.getById);
router.post('/', movieController.addmovie);
router.put('/:id', movieController.updatemovie);
router.delete('/:id', movieController.deletemovie)
module.exports = router;