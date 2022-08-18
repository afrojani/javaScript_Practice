var shoppingCart = {
    book: 2,
    pen: 20,
    pencil: 10,
    color: 15,
    paper: 5
}
console.log(shoppingCart)
var properties = Object.keys(shoppingCart)
console.log(properties)
var propertyValues = Object.values(shoppingCart)
console.log(propertyValues)

var pencilValue = shoppingCart.pencil
// console.log(pencilValue)
var pencilValue2 = shoppingCart['pencil']
// console.log(pencilValue2)
var propertyName = 'pencil'
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue)
shoppingCart.pencil = 11;
console.log(shoppingCart);
shoppingCart['pencil'] = 12;
console.log(shoppingCart);
shoppingCart[propertyName] = 13;
console.log(shoppingCart);