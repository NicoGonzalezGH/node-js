const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=c072e825d4994166c0e645f2abd49fa8&query=New%20York&query=37.8267,-122.4233'
request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')

})

const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmljb2dvbnphbGV6IiwiYSI6ImNrc2dzMXlhZDFuN20yb256cm83NDRpYjEifQ.xsVvt_QHLk6FFlu2aGBveA&limit=1'
request({ url: mapbox, json: true }, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log('Latitude of L.A: ' + latitude)
    console.log('Longitude of L.A: ' + longitude)
})