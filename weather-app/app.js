const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=c072e825d4994166c0e645f2abd49fa8&query=New%20York&query=37.8267,-122.4233'
request({ url: url, json: true},(error, response)=>{
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like '+response.body.current.feelslike+' degrees out.')
    
})