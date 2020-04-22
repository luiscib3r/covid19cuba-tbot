import { Schema, model, Document } from 'mongoose'

export interface IChat extends Document {
    id: number
    username: string | undefined
    first_name: string | undefined
    last_name: string | undefined
    description: string | undefined
    invite_link: string | undefined
    title: string | undefined
    type: string
}

const chatSchema = new Schema({
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
    description: {
        type: String
    },
    invite_link: {
        type: String
    },
    title: {
        type: String
    },
    type: {
        type: String
    } 
}, { timestamps: true })

export default model<IChat>('user', chatSchema)