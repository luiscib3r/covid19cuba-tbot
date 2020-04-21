import Telegraf from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN || '')

bot.start(ctx => ctx.reply('I am live'))

bot.telegram.setWebhook(`${process.env.BOT_URI}/bot${process.env.BOT_TOKEN}`)

export default bot