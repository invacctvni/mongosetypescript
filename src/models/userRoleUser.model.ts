// import { UserRoleUserModel } from './userRoleUser.model';
import { IUserRole } from './userRole.model';
import { User, IUser } from './user.model';
import mongoose from 'mongoose';


export interface IUserRoleUser {
    user: IUser,
    userRole: IUserRole
}

export interface UserRoleUserModel extends mongoose.Model<IUserRoleUser>{
    
}

const userRoleUserSchema = new mongoose.Schema <IUserRoleUser, UserRoleUserModel> (
    { user: {type: mongoose.Types.ObjectId, ref: "User"},
     userRole: {type: mongoose.Types.ObjectId, ref: "UserRole"}
}
)




export const userRoleUser = mongoose.model<IUserRoleUser, UserRoleUserModel>("UserRoleUser", userRoleUserSchema)

