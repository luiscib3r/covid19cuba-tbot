import { ContextMessageUpdate } from 'telegraf'

export default async (ctx: ContextMessageUpdate) => {
    let user = ctx.from?.first_name

    const message = `Hola ${user}, mi función en los grupos es unicamente para el envío de notificaciones. Si desea obtener información sobre el estado de Cuba con respecto a la pandemia puede contactarme por privado @covid19cubadata_bot`

    ctx.reply(message)
}