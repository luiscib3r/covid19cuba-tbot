import Telegraf, {ContextMessageUpdate} from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN || '')

import start from './controllers/start.controller'
import summary from './controllers/summary.controller'
import evolution from './controllers/evolution.controller'
import test from './controllers/test.controller'
import provincias from './controllers/provincias.controller'
import sexo from './controllers/sexo.controller'
import edad from './controllers/edad.controller'
import modo from './controllers/modo.controller'
import casos_extranjeros from './controllers/casos_extranjeros.controller'
import nacionalidad from './controllers/nacionalidad.controller'
import about from './controllers/about.controller'
import notify from './controllers/notify.controller'

import inline_handler from './controllers/inline.controller'

import channel_handler from './controllers/channel_handler.constroller';

bot.start(start)
bot.command('summary', summary)
bot.command('evolution', evolution)
bot.command('test', test)
bot.command('provincias', provincias)
bot.command('sexo', sexo)
bot.command('edad', edad)
bot.command('modo', modo)
bot.command('casos_extranjeros', casos_extranjeros)
bot.command('nacionalidad', nacionalidad)
bot.command('about', about)

// Keyboard handlers
bot.hears('☢️ Resumen', summary)
bot.hears('⏳ Evolución de casos por días', evolution)
bot.hears('📝 Datos de los Tests realizados', test)
bot.hears('🇨🇺 Casos por provincias', provincias)
bot.hears('🚻 Casos por Sexo', sexo)
bot.hears('👶🏻🧔🏽 Distribución por grupos etarios', edad)
bot.hears('🦠 Modo de Contagio', modo)
bot.hears('🌏 Casos por Nacionalidad (Cubanos/Extranjeros)', nacionalidad)
bot.hears('🗺 Distribución por nacionalidad', casos_extranjeros)
bot.hears('ℹ️ Acerca de', about)

bot.on('inline_query', inline_handler)

// Notify System
bot.command('chatid', async ctx => {
    let chatId = ctx.chat?.id
    ctx.reply(chatId?.toString() || 'Not chat id')
})

bot.command('userid', async ctx => {
    let userId = ctx.from?.id
    ctx.reply(userId?.toString() || 'Not user id')
})

bot.command('notify', notify)

// catch message from group chat
bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username
})

bot.on('channel_post', channel_handler)

bot.telegram.setWebhook(`${process.env.BOT_URI}/bot${process.env.BOT_TOKEN}`)

export default bot