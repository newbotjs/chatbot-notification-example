import axios from 'axios'

export function notification(date) {
    const { data } = this.converse
    const { source, address, user } = data.session.message
    return axios({
        url: process.env.SERVER_URL + '/notification',
        method: 'POST',
        data: {
            userId: user.id,
            platform: source,
            date,
            address // for BotFramework
        }
    })
}