const Products = require('../model/Products')
const users = require('../model/Users')

module.exports = {
    products: new Products(),
    users
}