import Telegraf from 'telegraf'

import axios, { AxiosResponse } from 'axios'
import summary from './types/summary'

const bot = new Telegraf(process.env.BOT_TOKEN || '')

bot.start(async ctx => {
    let res: AxiosResponse<summary> = 
        await axios.get(process.env.API_URI + 'summary' || 'http://localhost:3000/summary')

    ctx.replyWithMarkdown(`
🤒 <b>Diagnosticados</b>: ${res.data.total_diagnosticados}
🔬 <b>Diagnosticados hoy</b>: ${res.data.diagnosticados_hoy}
🤧 <b>Activos</b>: ${res.data.activos}
😃 <b>Recuperados</b>: ${res.data.total_recuperados}
🤩 <b>Índice de Recuperación</b>: ${res.data.recuperacion}%
✈️ <b>Evacuados</b>: ${res.data.total_evacuados}
⚰️ <b>Fallecidos</b>: ${res.data.total_fallecidos}
😵 <b>Mortalidad</b>: ${res.data.mortalidad}%
🏥 <b>Ingresados</b>: ${res.data.total_ingresados}
📆 <b>Actualizado</b>: ${res.data.fecha}
`)

})

bot.telegram.setWebhook(`${process.env.BOT_URI}/bot${process.env.BOT_TOKEN}`)

export default bot