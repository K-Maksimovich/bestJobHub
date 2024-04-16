import { Schema, model } from 'mongoose';

const User = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    photo: {type:String}
})

const UserSchema = model('User', User);

export default UserSchema;