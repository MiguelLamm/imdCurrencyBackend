const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const leaderSchema= new Schema({
   totalAmount : Number,
   nickname: String
});
const Leader = mongoose.model('Leader', leaderSchema);

module.exports= Leader;