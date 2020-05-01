const express = require('express');
const router = express.Router();
const LeadController = require('../controllers/api/v1/leaderbord');

router.get("/",LeadController.ranks);


module.exports= router;