const getAll = (req,res)=>{
    res.json({
        "status": "succes",
        "message": "get gelukt"
    });
}

const create =(req,res)=>{
    res.json({
        "status": "succes",
        "message": "post gelukt"
    });
}

module.exports.getAll=getAll;
module.exports.create=create;