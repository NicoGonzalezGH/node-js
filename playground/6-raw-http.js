const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=c072e825d4994166c0e645f2abd49fa8&query=New%20York&query=37.8267,-122.4233'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()