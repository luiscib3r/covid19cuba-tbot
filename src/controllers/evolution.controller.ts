import { ContextMessageUpdate } from 'telegraf'
import axios from 'axios'

export default async (ctx: ContextMessageUpdate) => {
    let chatId = ctx.message?.chat.id

    ctx.telegram.sendChatAction(chatId || 0, 'typing')
    var graph = await axios.get(`${process.env.API_URI}evolution_graph`, {responseType: 'arraybuffer'})
    ctx.replyWithPhoto({source: Buffer.from(graph.data)})

    ctx.telegram.sendChatAction(chatId || 0, 'typing')
    var graph = await axios.get(`${process.env.API_URI}evolution_recuperados_graph`, {responseType: 'arraybuffer'})
    ctx.replyWithPhoto({source: Buffer.from(graph.data)})

    ctx.telegram.sendChatAction(chatId || 0, 'typing')
    var graph = await axios.get(`${process.env.API_URI}evolution_fallecidos_graph`, {responseType: 'arraybuffer'})
    ctx.replyWithPhoto({source: Buffer.from(graph.data)})
}