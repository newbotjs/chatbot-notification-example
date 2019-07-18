const express = require('express')
const expressNewBot = require('newbot-express')
const routes = require('./routes')

const app = express()

const expressBot = expressNewBot({
    botPath: __dirname + '/..',
    botframework: {
        path: '/botframework'
    }
}, app)

routes(app, expressBot)

app.use((err, req, res, next) => {
    res.status(500).end(err.message)
})

app.listen(5500, () => console.log('server is running'))