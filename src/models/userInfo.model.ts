import { IUser, userSchema, User } from './user.model';
import mongoose, { Mongoose, Schema } from 'mongoose';
//interface string type lowercase, Schema Uppercase. 
export interface IUserInfo {
    userAddress: string, 
    userPhone : number,
    //add user relationship 1-1 
    user: IUser
} 

export interface UserInfoModel extends mongoose.Model<IUserInfo>{
    //function interface define 
    createNewUserInfo(attr: IUserInfo): IUserInfo
}

//class Schema related 
export const userInfoSchema = new mongoose.Schema<IUserInfo, UserInfoModel>({
    userAddress: {type: String, required: true},
    userPhone: {type: Number, required: true},
    user: {type: userSchema, required: true}
})

//定义 function : create static method
userInfoSchema.static('createNewUserInfo', async (attr) => {
    const user = new User({name: attr.user.name, email: attr.user.email, description: attr.user.description })
    await user.save() 
    const userInfo = new UserInfo({...attr, user: user})
    await userInfo.save()
    return userInfo
})

//schema sync 
//小写model是生成model的，大写是定义Model类型的
export const UserInfo = mongoose.model<IUserInfo, UserInfoModel>("UserInfo",userInfoSchema)