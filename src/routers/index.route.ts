import { UserRole } from './../models/userRole.model';
import { UserInfo } from './../models/userInfo.model';
import mongoose from 'mongoose';
import { Router } from "express";
import express, {Request, Response}  from "express"
import {User} from "../models/user.model"
import { Product , IProduct} from "../models/product.model";
import { UserRoleUser } from '../models/userRoleUser.model';
const route = Router() 
route.post('/', (req: Request, res: Response) => {

    const {name, email, avatar} = req.body
    console.log(name, email, avatar);
    const userZero = User.myStaticMethod({
        name,
        email, 
        avatar 
    })
    console.log(userZero);
    // const title = "abc"
    // const description = "desc"
    // const todo = Todo.build({title, description})
    // res.send({rs:true, data: todo})


    // run().catch(err => console.log(err));
    // console.log(answer);
    const userOne = User.myStaticMethod({
        name: "Kevin",
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    })

    const userName = User.newUserName({
        name : "alex",
        email: "alex@gmail.com",
        avatar: "https://i.imgur.com/dM7Thhn.png"
    })

    res.send({rs:true, data: userZero})    

    async function run() {
    // 4. Connect to MongoDB
    // await connect('mongodb://127.0.0.1:27017/test');

        // const user = new User({
        //     name: 123,
        //     email: 'bill@initech.com',
        //     avatar: 'https://i.imgur.com/dM7Thhn.png'
        // });
        // await user.save();

        // console.log(user.email); // 'bill@initech.com'
        
    }

})
//get all users from the db
route.get('/getUserAll', async (req: Request, res: Response) => {
    let savedAll = await User.find({})
    console.log(savedAll);
    // Product.getAllProducts()
    res.send({rs:true, data: savedAll})
})
//get all products
route.get('/getProductAll', async (req: Request, res: Response) => {
    // let savedAll = await User.find({})
    // console.log(savedAll);
    let productList : Array<IProduct> = await Product.getAllProducts()
    console.log(productList);
    res.send({rs:true, data: productList})
})

//get one product 
route.get('/getProduct/:id', async (req:Request, res: Response) => {
    const {id} = req.params
    // console.log(id);
    let newId = new mongoose.Schema.Types.ObjectId(id)
    let findproduct = await Product.getProductById(newId)
    if (!findproduct) {
        res.send({rs:false, message: "cannot find the right product"})
    }
    res.send({rs:true, data: findproduct})
})


//create a new 
route.post('/createNewProduct',async (req:Request, res: Response) => {
    let result = await Product.createNewProduct(req.body)
    // console.log(req.body);
    res.send({rs:true, data: result})
})

route.post('/createNewUserInfo', async (req: Request, res: Response) => {
    let result = await UserInfo.createNewUserInfo(req.body)
    res.send({rs:true, data: result})
})

route.post('/createUserRole', async (req: Request, res: Response) => {
    let result = await UserRole.createUserRole(req.body)
    res.send({rs:true, data: result})
})

route.post('/createUserRelation',async (req:Request,res: Response) => {
    const {userName,roleTitle} = req.body

    const user = User.find({
        name:userName
    })
    const userRole = UserRole.find({
        title: roleTitle
    })

    if (!!user && !!userRole) {
        // console.log(user, userRole);
        // UserRoleUser.createUserRoleUser({user: user, userRole: userRole})
    }
    res.send({rs:true, data: {user, userRole}})
})


export default route



