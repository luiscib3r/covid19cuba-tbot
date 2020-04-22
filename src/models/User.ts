import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
    id: number
    username: string | undefined
    first_name: string
    last_name: string | undefined
}

const userSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    username: {
        type: String,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
}, { timestamps: true })

export default model<IUser>('user', userSchema)