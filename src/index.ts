import bot from './bot'

import express from 'express'

const app = express()
app.get('/', (_, res) => res.send('Vip Vip'))

// Set the bot API endpoint
app.use(bot.webhookCallback(`/bot${process.env.BOT_TOKEN}`))

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port %s', process.env.PORT)
})