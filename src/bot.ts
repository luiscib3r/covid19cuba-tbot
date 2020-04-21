import Telegraf, {ContextMessageUpdate} from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN || '')

import start from './controllers/start.controller'
import summary from './controllers/summary.controller'

bot.start(start)

bot.command('summary', summary)

bot.telegram.setWebhook(`${process.env.BOT_URI}/bot${process.env.BOT_TOKEN}`)

export default bot