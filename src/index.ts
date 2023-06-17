import  express, {Request, Response}  from "express"
import  bodyParser, {json} from 'body-parser'
import { mongoConnection } from "./initialDB"
require('dotenv-flow').config() 
import {User} from "./models/user.model"
import route from "./routers/index.route"

const app = express()
//add body parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//router: 
app.use('/', route)
//connect to MongoDB Atlas
mongoConnection()
app.listen(process.env.DATABASE_PORT, () => {
    // console.log(process.env);  
    console.log('Server is listening ');
})


