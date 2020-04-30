const Transfer = require('../../../models/transfer');

const getAll = (req,res)=>{
    if(req.user.nickname){
        let requester = req.user.nickname;
        Transfer.find({$or:[ {to:req.user.nickname}, {from:req.user.nickname} ]})
        .then(TransferFound => {
            if (!TransferFound) {
                res.json({
                    "status": "error",
                    "message": "Could not find Transfer"
                });
            }
            if (TransferFound) {
                let sum1 = 0;
                let sum2 = 0;
                let sumtotal = 0;
               
                TransferFound.forEach(function(transfer){
                    //Alle inkomens
                    if(transfer.to == req.user.nickname){
                        
                        sum1+= transfer.amount;
                        
                    }
                    //Alle uitgaven
                    else if(transfer.from == req.user.nickname){
                        
                        sum2+= transfer.amount;
                       
                    }
                    
                })
                sumtotal = req.user.totalAmount + sum1 - sum2;
                    
                res.json({
                    "status":"success",
                    "requester":requester,
                    "total": sumtotal,
                    "data": {"transfers":TransferFound}
                });
            }
        })
    }
    else{
        res.json({
            "status": "error",
            "message": "Could not show transfer"
        });
    }
    

   
}

const create =(req,res, next)=>{
   
    let transfer = new Transfer();
    transfer.amount= req.body.amount;
    transfer.to= req.body.to;
    
    transfer.from= req.user.nickname;
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
                "status": "success",
                "message": {
                    "transfer": doc
                }
            });
        }
    } )
  
}




module.exports.getAll=getAll;
module.exports.create=create; 
