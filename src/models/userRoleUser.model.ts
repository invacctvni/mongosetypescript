

import mongoose, {Schema} from 'mongoose';
import {IUserRole} from "./userRole.model";
import {IUser} from "./user.model";


export interface IUserRoleUser {
    user: IUser,
    userRole: IUserRole
}


export const userRoleUserSchema = new Schema(
    {
        user: {type: mongoose.Types.ObjectId, ref: "User"},
        userRole: {type: mongoose.Types.ObjectId, ref: "UserRole"}
    }
)



export const UserRoleUser =  mongoose.models.UserRoleUser ||mongoose.model("UserRoleUser", userRoleUserSchema)

