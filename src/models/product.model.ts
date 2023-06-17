import mongoose, { Types } from "mongoose"
//class cannot used for type, but interface can be used as type. 
export interface IProduct {
    name: string,
    slug: string, 
    description: string, 
    price: number,
}

//2. define methods in interface here.  
interface ProductModel extends mongoose.Model<IProduct> {
    //4. define method interface for get all
    getAllProducts: Types.Array<IProduct>

}
//2. schema 
const productSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    slug: {type: String, required: true, unique: true},
    description: {type: String, required: false},
    price: {
        type: Number, 
        min: 0,
        max: 1000,
        integer: true
    }
})

//3. get all 
productSchema.static('getAllProducts', async () => {
    return await Product.find({})
})




//3. create class !! 
export const Product = mongoose.model<IProduct, ProductModel>('Product', productSchema)



