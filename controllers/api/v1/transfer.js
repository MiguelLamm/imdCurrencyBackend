const Transfer = require('../../../models/transfer');

const getAll = (req,res)=>{
    if(req.body.to){
        Transfer.find({ to: req.body.to})
        .then(TransferFound => {
            if (!TransferFound) {
                res.json({
                    "status": "error",
                    "message": "Could not find Transfer"
                });
            }
            if (TransferFound) {
                let sum = 0;
                TransferFound.forEach(function(transfer){
                    sum += transfer.amount;
                    
                })
                res.json({
                    "total": sum,
                    "data": TransferFound
                });
                
                console.log(sum);
            }
        })
    }
    else{
        Transfer.find({}, (err, doc) => {
            if (err) {
                res.json({
                    "status": "error",
                    "message": "Could not show transfer"
                });
            }
            /*if (!err) {
                res.json(doc);
                let docs = [doc];
                console.log(docs);
            }*/
        });
    }
    

   
}

const create =(req,res, next)=>{
    console.log('Checkpoint router create');
    let transfer = new Transfer();
    transfer.amount= req.body.amount;
    transfer.to= req.body.to;
    transfer.from= req.body.from;
    transfer.message= req.body.message;
    transfer.save( (err,doc) =>{
        if (err){
            res.json({
                "status": "error",
                "message":"could not send transfer"
            });
        }

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

const update =(req,res, next)=>{
let sentTo = req.body.to;
    let incAmount = req.body.amount;
Transfer.findOneAndUpdate({
    to: sentTo
},{
    $inc : {
        amount: incAmount
    }
}, (err, doc)=>{
    if (err){
        res.json({
            "status": "error",
            "message":"could not send transfer"
        });
    }

    if(!err){
        res.json({
            "status": "succes",
            "message": {
                "transfer": doc
            }
        });
    }
})
}



module.exports.getAll=getAll;
module.exports.create=create; 
module.exports.update=update; 