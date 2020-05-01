const Leader = require('../../../models/leaderbord');
const Transfer = require('../../../models/transfer');

const ranks = (req,res)=>{
    Transfer.find({})
    .then(found => {
        if(found){
            res.json({
                "status": "success",
                "message": "aubrankings"
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
const updateRanks = (req,res)=>{
    Transfer.find({})
    .then(found => {
        if(found){
            res.json({
                "status": "success",
                "message": "aubrankings"
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
    Transfer.find({})
    .then(found => {
        if(found){
            res.json({
                "status": "success",
                "message": "aubrankings"
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
module.exports.addrank=addrank;
module.exports.updateRanks=updateRanks;
module.exports.ranks=ranks;