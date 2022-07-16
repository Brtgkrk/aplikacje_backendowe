const express = require('express');
const opinionController = require('./../controllers/opinionController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/')
    .get(opinionController.getAllOpinions)
    .post(opinionController.createOpinion);

router.route('/:id')
    .get(opinionController.getOpinion)
    .patch(opinionController.updateOpinion)
    .delete(opinionController.deleteOpinion)
    .link(opinionController.getOpinionAuthor);

    module.exports = router;