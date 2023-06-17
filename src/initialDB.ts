import mongoose from 'mongoose' 
require('dotenv-flow').config() 


export const mongoConnection = () => mongoose.connect(process.env.DATABASE_HOST!, {}).then(
       () => {console.log('connected to mongodb');
       }
   ).catch((e) => {console.log(e);})    



