const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({
        "status": "succes",
        "message": "get gelukt"
    });
});

router.post("/",(req,res)=>{
    res.json({
        "status": "succes",
        "message": "post gelukt"
    });
});

module.exports= router;