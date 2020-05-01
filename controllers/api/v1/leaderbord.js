const Leader = require('../../../models/leaderbord');

const ranks = (req,res)=>{
res.json({
    "status": "success",
    "message": "rankings"
})
   
}

module.exports.ranks=ranks;