import { Router } from "express";
import express, {Request, Response}  from "express"
import {User} from "../models/user.model"
import { Product , IProduct} from "../models/product.model";
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

export default route

