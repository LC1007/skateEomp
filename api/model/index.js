const Products = require('../model/Products')
const Users = require('../model/Users')

module.exports = {
    products: new Products(),
    users: new Users()
}