const schedule = require('node-schedule')

module.exports = (app, expressBot) => {
    app.post('/notification', (req, res, next) => {
        try {
            const {
                userId,
                date,
                platform,
                address // for BotFramework
            } = req.body
            const data = {
                date
            }
            schedule.scheduleJob(new Date(date), () => {
                expressBot.proActiveEvent({
                    event: {
                        name: 'notification',
                        data
                    },
                    userId,
                    platform,
                    address // for BotFramework
                })
            })
            res.status(204).end()
        } catch (err) {
            next(err)
        }
    })
}