//Object property shorthand

const name = 'Nico'
const userAge = 28

const user = {
    name,
    age: userAge,
    location: 'Buenos Aires'
}

console.log(user)

//Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//const label = product.label
//const stock = product.stock

//const { label: productLabel, stock, rating } = product
//console.log(productLabel)
//console.log(stock)
//console.log(rating)

const transaction = (type, { label='no label', stock=0 } = {} ) => {
    console.log(type, label, stock)
}

transaction('order',product)