// gun schema
const mongoose = require('mongoose');
const Review = require('./Review');

const productSchema = new mongoose.Schema({
    authorname:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        default:'/images/proj_dummy_img.avif'

    },
    blogcontent:{
        type:String,
        trim:true,
        required:true
        
    },
    // automatic:{
    //     type:String,
    //     trim:true
    // },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});



productSchema.post('findOneAndDelete' , async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})


let Product = mongoose.model('Product' , productSchema);
// mongoose.models={};
module.exports = Product;