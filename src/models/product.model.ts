import { User, IUser, userSchema } from './user.model';
import mongoose, { ObjectId, Types } from "mongoose"
//class cannot used for type, but interface can be used as type. 
export interface IProduct {
    name: string,
    slug: string, 
    description?: string, 
    price: number,
    user: IUser
}

//2. define methods in interface here.  
// ------------------------------- Define all methods in interface ------------------------------------
interface ProductModel extends mongoose.Model<IProduct> {
    //4. define method interface for get all
    getAllProducts(): Types.Array<IProduct>,
    createNewProduct(attr: IProduct): IProduct,
    getProductById(id: ObjectId) : IProduct
}
//2. schema 1 user to many products 
const productSchema = new mongoose.Schema({
    // id: { type: Number, unique: true, min: 1 },
    name: {type: String, required: true}, 
    slug: {type: String, required: true, unique: true},
    description: {type: String, required: false},
    price: {
        type: Number, 
        min: 0,
        max: 1000,
        integer: true
    },
    user:  {type: mongoose.Types.ObjectId, ref:"User"}
})
// ------------------------------- Methods -------------------------------
//3. get all 
productSchema.static('getAllProducts', async () => {
    let saved = await Product.find({}).populate("user") //relations in TypeORM to extract related user information. 
    // console.log('products' , saved);
    return saved
    // res.send({rs:true, data: savedAll})
})

productSchema.static('createNewProduct', async function createNewProduct(attr: IProduct) {

    const userInput = new User({name: attr.user.name, email: attr.user.email})

   
    await userInput.save()  
    const p = new Product ({...attr, user: userInput})
    // console.log(p)
    await p.save() 
    return p  
}) 

//get product by id. 
productSchema.static('getProductById', async function getProductById (id: ObjectId) {
    const product = await Product.findById(id).exec()
    return product
})


//3. create and export class 
export const Product = mongoose.model<IProduct, ProductModel>('Product', productSchema)



