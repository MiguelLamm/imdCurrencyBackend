const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transferSchema= new Schema({
    amount: {
        type: Number,
        required: true
    },
    to:String,
    from: String,
    message: String
});
const Transfer = mongoose.model('Transfer', transferSchema);

module.exports= Transfer;