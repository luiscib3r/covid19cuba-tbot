import { ContextMessageUpdate } from 'telegraf'

import Chats from '../models/Chats'

export default async (ctx: ContextMessageUpdate) => {
    let text = ctx.message?.text?.replace('/notify', '')
    let uid = ctx.from?.id

    if (uid?.toString() === process.env.ADMIN_UID?.toString()) {

        let chats = await Chats.find()

        chats.forEach(c => {
            if (text)
                ctx.tg.sendMessage(c.id, text)
            else
                ctx.tg.sendMessage(process.env.ADMIN_UID || 0, "Not Text for notify")
        })

    }
}