const User = require('../models/User');
const passport = require('../passport/passport');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    console.log(req.body);
    let nickname= req.body.username;
    let username = req.body.email; // UI of postman
    let password = req.body.password;

    const user = new User({username: username, nickname:nickname, totalAmount: "100"});
    
    await user.setPassword(password);
    await user.save().then(result => {
        
        let token= jwt.sign({
            uid:result._id,
            username: result.username
        }, "secret");
       
        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    });
};

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.email, req.body.password)
    .then(result => {

        if(!result.user){

            res.json({
                "status": "failed",
                "message":"User does not exist"
            })

        }

        let token= jwt.sign({
            uid:result.user._id,
            username: result.user.username
        }, "secret");

        return res.json({
            "status": "success",
            "data": {
                "token": token
            }
        });
    })
    .catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
};




module.exports.login= login;
module.exports.signup = signup;