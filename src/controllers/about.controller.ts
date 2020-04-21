import {ContextMessageUpdate} from 'telegraf'

export default async (ctx: ContextMessageUpdate) => {
    let chatId = ctx.message?.chat.id

    ctx.telegram.sendChatAction(chatId || 0, 'typing')

    ctx.replyWithHTML(`
🕸 <b>Web</b>
🌐 https://covid19cubadata.github.io/
🌐 https://covidcuba.swlx.info
🇨🇺 http://www.cusobu.nat.cu/covid/

📲 <b>Aplicación Movil</b>:
Apklis: https://www.apklis.cu/application/club.postdata.covid19cuba

👨‍💻 <b>Bot Source Code</b>:
https://github.com/correaleyval/covid19cuba_bot

💪💻 <b>Partners</b>:
* Covid19CubaData
(Juventud Técnica, MATCOM-UH y Postdata.club)

* CUSOBU cusobu.nat.cu
* DAXSLAB daxslab.com
* SWL-X swlx.info
* UIC uic.cu
* Universidad de Oriente uo.edu.cu
`)
}