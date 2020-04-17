const express = require('express');
const router = express.Router();
const traController = require('../../../controllers/api/v1/transfer');

router.get("/",traController.getAll);

//post first transfer
router.post("/",traController.create);

router.put("/",traController.update);

module.exports= router;