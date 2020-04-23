import express from 'express'

const app = express()
app.get('/', (_, res) => res.send('Vip Vip'))

app.post('/tips', (req, res) => {
    if (req.headers.stoken === 'cuba') {
        res.send('OK')
    }
    else {
        res.send('Unauthorized')
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port %s', process.env.PORT)
})