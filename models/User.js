// const mongoose =  require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

// const userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required: true,
//         trim : true
//     }
// })

// userSchema.plugin(passportLocalMongoose);


// let User = mongoose.model('User' , userSchema);
// module.exports = User;
const { object } = require('joi');
const mongoose =  require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    // email:{
    //     type:String,
    //     required: true,
    //     trim : true
    // }
    age:{
        type:Number,
        required:true,
        trim:true

    },
    adhaarnumber:{
        type:Number,
        required:true,
        trim:true,
        // max:10

    },
    gender:{
        type:String,
        // required:true,
        // trim:true

    },
    // islegal:{
    //     type:String,
    //     required:true,
    //     trim:true

    // }
    address:{
        type:String
    }

})

userSchema.plugin(passportLocalMongoose);


let User = mongoose.model('User' , userSchema);
module.exports = User;