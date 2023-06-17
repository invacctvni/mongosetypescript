import mongoose, { Types } from "mongoose"
//class cannot used for type, but interface can be used as type. 
export interface IProduct {
    name: string,
    slug: string, 
    description?: string, 
    price: number,
}

//2. define methods in interface here.  
interface ProductModel extends mongoose.Model<IProduct> {
    //4. define method interface for get all
    getAllProducts(): Types.Array<IProduct>,
    createNewProduct(attr: IProduct): IProduct

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
productSchema.static('getAllProducts', async (req: Request, res: Response) => {
    let saved = await Product.find({})
    // console.log('products' , saved);
    return saved
    // res.send({rs:true, data: savedAll})
})

productSchema.static('createNewProduct', async function createNewProduct(attr: IProduct) {
    const p = new Product (attr)
    p.save() 
    return p  
}) 



//3. create class !! 
export const Product = mongoose.model<IProduct, ProductModel>('Product', productSchema)



