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

import inline_handler from './controllers/inline.controller'

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

bot.on('inline_query', inline_handler)

bot.telegram.setWebhook(`${process.env.BOT_URI}/bot${process.env.BOT_TOKEN}`)

export default bot