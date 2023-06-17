import mongoose from "mongoose";
//verify data types 
// looks like dto 
interface ITodo {
    title: string; 
    description: string; 
}
//This interface tells typescript that we have a build function in todo model. (Interface and Class must be start from uppercase)
interface TodoModelInterface extends mongoose.Model<TodoDoc> {
    build(attr: ITodo): TodoDoc  //the build function will return any type of data with Itodo data type as attribute.
}

interface TodoDoc extends mongoose.Document {
    title: string;
    description: string;
}
//mongoose class
const todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true 
    }, 
    description: {
        type: String, 
        required: true 
    }
})

//Schema Sync 
const Todo = mongoose.model<any, TodoModelInterface>("ToDo", todoSchema)

// todoSchema.static('build', (attr: ITodo) => {
//     return new Todo(attr)
// })

todoSchema.statics.build = function (attr) {
    return new Todo (attr)
}

    // }) => {
// const build = (attr : ITodo) => {
//     return new Todo(attr)
// }

// Todo.build({title: "abwww", description: "jwow"})

// build(
//     {
//         title: "22", 
//         description: "dws", 
//         // hours: 2
//     }
// )

//
export default Todo 