// import { IUserRole, IUserRoleModel } from './userRole.model';
import mongoose from "mongoose"

//2 interface 1 schema sync 1 method 
//only schema upppercase string
export interface IUserRole {
    title: string, 
}

export interface IUserRoleModel extends mongoose.Model<IUserRole>{
    createUserRole(attr: IUserRole) : IUserRole
}

export const userRoleSchema = new mongoose.Schema<IUserRole, IUserRoleModel>({
    title: {type: String, required: true, unique: true}
})

//method 
//create 
userRoleSchema.static("createUserRole", async (attr: IUserRole) => {
    const userRole = new UserRole (attr) 
    await userRole.save()
    return userRole
})


//export user role (schema sync)
export const UserRole = mongoose.model<IUserRole, IUserRoleModel>("UserRole", userRoleSchema) 


const userRoleUserSchema = new mongoose.Schema ({ user: {type: mongoose.Types.ObjectId, ref: "User"},
userRole: {type: mongoose.Types.ObjectId, ref: "UserRole"}})

export const userRoleUser = mongoose.model("UserRoleUser", userRoleUserSchema)