const request = require('request')

const forecast = (address, longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c072e825d4994166c0e645f2abd49fa8&query=' + encodeURIComponent(address) + '&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude)

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast services!')
        } else if (response.body.features.length === 0) {
            callback('Unable to find forecast information. Try another search.')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = forecast