////A callback is a function we provide as an argument to another function with the intention of having it called later on.
//setTimeout(() => {
//    console.log('Two seconds are up')
//}, 2000)
//
//const names = ['Andrew', 'Jen', 'Jess']
//const shortNames = names.filter((name) => {
//    return name.length <= 4
//})
//
//const geocode = (address, callback) => {
//    setTimeout(() => {
//        const data = {
//            latitude: 0,
//            longitude: 0
//        }
//        callback(data)
//    }, 2000)
//}
//
//const data = geocode('Philadelphia', (data) => {
//    //The name of the argument in the definition of this function doens't need match the callback call argument (line 17)
//    console.log(data)
//})

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        callback(sum)
            //callback(a+b) is also ok
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})