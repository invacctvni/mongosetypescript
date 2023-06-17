import  express, {Request, Response}  from "express"
import  {json} from 'body-parser'
import { mongoConnection } from "./initialDB"
import Todo from './models/todo.model'
require('dotenv-flow').config() 
import {User, answer} from "./models/user.model"


const app = express()
app.use(json())

//router: 
app.use('/', (req: Request, res: Response) => {

    // const title = "abc"
    // const description = "desc"
    // const todo = Todo.build({title, description})
    // res.send({rs:true, data: todo})


    run().catch(err => console.log(err));
    // console.log(answer);
    const userOne = User.myStaticMethod({
        name: "Kevin",
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    })
    async function run() {
    // 4. Connect to MongoDB
    // await connect('mongodb://127.0.0.1:27017/test');

        const user = new User({
            name: 123,
            email: 'bill@initech.com',
            avatar: 'https://i.imgur.com/dM7Thhn.png'
        });
        await user.save();

        console.log(user.email); // 'bill@initech.com'
        res.send({rs:true, data: userOne})    
    }

})
//connect to MongoDB Atlas
mongoConnection()
app.listen(process.env.DATABASE_PORT, () => {
    // console.log(process.env);  
    console.log('Server is listening ');
})


