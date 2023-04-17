//B1: khai bao thu vien
const mongoose = require('mongoose');
// b2 khai bao thu vien Schema
const Schema = mongoose.Schema;

//B3 tao doi tuong Scheme bao gom cac thuoc tinh thuoc conllection
const revierSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    starts: {
        type: Number,
        default : 0,
    },
    note:{
        type: String,
        required: false,
    },
    createAt:{
        type: Date,
        default: Date.now(),
    }
    ,updateAt:{
        type: Date,
        default: Date.now(),
    }
});
//b4 export schema
module.exports = mongoose.model("review", revierSchema)