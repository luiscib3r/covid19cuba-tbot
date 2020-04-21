import Telegraf from 'telegraf'

import axios, { AxiosResponse } from 'axios'
import summary from './types/summary'

const bot = new Telegraf(process.env.BOT_TOKEN || '')

bot.start(async ctx => {
    let res: AxiosResponse<summary> = 
        await axios.get(process.env.API_URI + 'summary' || 'http://localhost:3000/summary')

    ctx.replyWithMarkdown(`
    🤒 **Diagnosticados**: ${res.data.total_diagnosticados}
    🔬 **Diagnosticados hoy**: ${res.data.diagnosticados_hoy}
    🤧 **Activos**: ${res.data.activos}
    😃 **Recuperados**: ${res.data.total_recuperados}
    🤩 **Índice de Recuperación**: ${res.data.recuperacion}%
    ✈️ **Evacuados**: ${res.data.total_evacuados}
    ⚰️ **Fallecidos**: ${res.data.total_fallecidos}
    😵 **Mortalidad**: ${res.data.mortalidad}%
    🏥 **Ingresados**: ${res.data.total_ingresados}
    📆 **Actualizado**: ${res.data.fecha}
    `)
})

bot.telegram.setWebhook(`${process.env.BOT_URI}/bot${process.env.BOT_TOKEN}`)

export default bot