import { Schema, model } from 'mongoose';

const Role = new Schema({
    value: { type: String, unique: true, default: "USER" },
})

const UserRole = model('Role', Role)

export default UserRole;
