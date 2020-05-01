const Leader = require('../../../models/leaderbord');

const ranks = (req,res)=>{
    Leader.find({}).sort({totalAmount:'desc'})
    .then(found => {
        if(found){
            res.json({
                "status": "success",
                "message": found
            })
        }
        if(!found){
            res.json({
                "status": "error",
                "message": "ayayay"
            })
        }
    })
}
const addrank = (req,res)=>{
    let rank = new Leader();
    rank.totalAmount= req.body.amount;
    rank.nickname= req.body.nickname;
    rank.save( (err,doc) =>{
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
                    "rankuser": doc
                }
            });
        }
    } )
}
const updateRanks = (req,res)=>{
    if(req.user.username){

    
    let nickname = req.user.nickname;
    let updateAmount = req.body.totalAmount;
    console.log(nickname);
    Leader.findOneAndUpdate({
        nickname: nickname
    },{
        totalAmount: updateAmount
    }).then(doc => {
        res.json({
            "status": "success",
           "data": doc
        })
    }).catch(err => {
        res.json(err);
    })
}else{
    res.json({
        "status": "error",
        "message":"geen nickname gevonden"
    })
}
}

module.exports.ranks=ranks;
module.exports.addrank=addrank;
module.exports.updateRanks=updateRanks;
