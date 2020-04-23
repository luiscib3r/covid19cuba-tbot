import { ContextMessageUpdate } from 'telegraf';

import ChatModel from '../models/Chats';

export default async (ctx: ContextMessageUpdate) => {

    let chat = await ctx.getChat()

    let ch = await ChatModel.findOneAndUpdate({ id: chat.id }, chat)

    if (!ch) ChatModel.create(chat)

    if (ctx.channelPost?.text === '/start')
        ctx.reply(`
ℹ️ Se ha registrado @covid19cubadata_bot en el canal, recibirá las notificaciones enviadas por el bot.
Puede enviar el resumen de los datos utilizando el modo inline: escriba @covid19cubadata_bot y espere a que se muestre un botón para enviar los datos.
Si desea activar algún comando del bot en específico para utilizarlo en el canal puede contactar con 👨‍💻 @luis_ciber.
`)
}