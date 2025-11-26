import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String , required: true},
    description : {type: String , required : true},
    price: { type : Number , required : true},
    image: {type : Array , required : true, validate: {
            validator: function (v) {
                return v.length >= 1;   // ⬅ minimum 1 image
            },
            message: "At least 1 product image is required"
        } },
    category : { type: String , required : true},
    subCategory : { type : String , required : true },
    sizes : { type : Array ,required : true , validate: {
            validator: function (v) {
                return v.length >= 1;   // ⬅ minimum 1 image
            },
            message: "At least 1 product image is required"
        }},
    bestSeller : { type : Boolean},
    date : { type : Number , required :  true}
})


const productModel = mongoose.model("product",productSchema);
export default productModel;