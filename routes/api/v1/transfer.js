const express = require('express');
const router = express.Router();
const traController = require('../../../controllers/api/v1/transfer');

router.get("/",traController.getAll);
//router.get("/:id",traController.getId);
//post first transfer
router.post("/",traController.create);

module.exports= router;