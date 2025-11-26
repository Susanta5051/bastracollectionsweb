
import { v2 as cloudinary} from 'cloudinary'
import productModel from '../model/productModel.js'

const addProduct =async (req,res)=>{
    try {
        const {name , description , price , category ,subCategory , sizes , bestSeller } = req.body;
        console.log(req.body);
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        

        const images = [image1 , image2 ,image3 ,image4].filter((image)=>image !=undefined);


        let imgUrl= await Promise.all(
            images.map(async (item)=>{
                   let result = await cloudinary.uploader.upload(item.path,{ resource_type: 'image'});
                   return result.secure_url;
            })
        )
        
        
        const productData ={
            name ,
            description,
            price :Number(price),
            subCategory,
            category,
            bestSeller: bestSeller==='true'? true: false,
            sizes:JSON.parse(sizes),
            image :imgUrl,
            date :Date.now()
        }

        const product = new productModel(productData);
        await product.save();

        return res.json({success:true , message :" Product saved successfully"});
        
    }catch (error){
        console.log(error);
        res.json({success : false , message : error.message});
    }
}

const removeProduct =async (req,res)=>{
    console.log(req.body);
    try{
        await productModel.findByIdAndDelete(req.body.id);
        return res.json({success : true , message :" Product deleted successfully"});
    }catch (error){
        console.log(error);
       return res.json({success : false , message : error.message});
    }
}

const listProduct =async (req,res)=>{
    try {

        const products= await productModel.find({});
       return res.json({ success : true , products});

    }catch (error){
        console.log(error);
       return res.json({success : false , message : error.message});
    }
}

const singleProduct =async (req,res)=>{
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId);
       return res.json({success : true , product});

    }catch (error){
        console.log(error);
       return res.json({success : false , message : error.message});
    }
}


export {addProduct , removeProduct ,singleProduct ,listProduct} ;