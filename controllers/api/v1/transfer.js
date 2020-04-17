const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transferSchema= new Schema({
    amount: Number,
    to:String,
    from: String,
    message: String
});
const Transfer = mongoose.model('Transfer', transferSchema);

const getAll = (req,res)=>{
    res.json({
        "status": "succes",
        "message": "get gelukt"
    });
}

const create =(req,res)=>{
    let transfer = new Transfer();
    transfer.amount= "50";
    transfer.to= "melanie";
    transfer.from="me";
    transfer.message= "donation";
    transfer.save( (err,doc) =>{
        if(!err){
            res.json({
                "status": "succes",
                "message": {
                    "transfer": doc
                }
            });
        }
    } )
  
}

module.exports.getAll=getAll;
module.exports.create=create; 