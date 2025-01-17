const api = require('../api')

const activity = (client, memberId, activityId, data) => {
    return new Promise((resolve, reject) => {
        api.call(client, 'PUT', `/members/${memberId}/activities/${activityId}`, null, data)
            .then(_ => {
                resolve('Activity updated')
            }).catch(error => {
                reject(error.response.data)
            })
    })
}

module.exports = {
    activity
}
