import { Schema, model, Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

interface UserModel extends Model<IUser> {
    myStaticMethod(): IUser;
  }
// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
// export const User = model<IUser>('User', userSchema);


userSchema.static('myStaticMethod', function myStaticMethod(attr: IUser) {
  return new User(attr);
});


export const User = model<IUser, UserModel>('User', userSchema);
// export const answer: IUser = User.myStaticMethod(); // 42

