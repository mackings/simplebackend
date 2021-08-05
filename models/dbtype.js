const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const staffSchema = new Schema({

    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    age:{
        type:String,
        required:true

    }

}); {timestamps:true}

const Staffs = mongoose.model("Staffs", staffSchema);
module.exports = Staffs;
