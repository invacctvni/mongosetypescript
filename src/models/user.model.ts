import { Schema, model, Model } from 'mongoose';

// 1. Create/Define an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

//2. Define/create static method interface for userSchema. 
export interface UserModel extends Model<IUser> {
    createUser(attr:IUser): IUser;
    newUserName(attr:IUser) : string
}



// 2. Create a Schema corresponding to the document interface.
//Define user and method type 
export const userSchema = new Schema<IUser, UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create methods
// export const User = model<IUser>('User', userSchema);

userSchema.static('createUser',async (attr: IUser)=> {
    const user = new User(attr)
    await user.save()
    return user;
});

userSchema.static('newUserName', function newUserName(attr: IUser) {
    const userName = new User (attr)
    return userName.name
})


export const User = model<IUser, UserModel>('User', userSchema);


