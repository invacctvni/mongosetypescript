import  express, {Request, Response}  from "express"
import  {json} from 'body-parser'
import { mongoConnection } from "./initialDB"
import Todo from './models/todo.model'
require('dotenv-flow').config() 



const app = express()
app.use(json())

//router: 
app.use('/', (req: Request, res: Response) => {

    const title = "abc"
    const description = "desc"
    const todo = Todo.build({title, description})
    res.send({rs:true, data: todo})
})
//connect to MongoDB Atlas
mongoConnection()
app.listen(process.env.DATABASE_PORT, () => {
    // console.log(process.env);  
    console.log('Server is listening ');
})

