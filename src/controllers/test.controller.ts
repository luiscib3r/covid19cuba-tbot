import { ContextMessageUpdate } from 'telegraf'
import axios from 'axios'

export default async (ctx: ContextMessageUpdate) => {
    let chatId = ctx.message?.chat.id

    ctx.telegram.sendChatAction(chatId || 0, 'typing')
    var graph = await axios.get(`${process.env.API_URI}tests_graph`, {responseType: 'arraybuffer'})
    ctx.replyWithPhoto({source: Buffer.from(graph.data)})
}