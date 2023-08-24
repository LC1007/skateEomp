const express = require('express');
const router = express()
const { products, users } = require('../model')
const bodyParser = require('body-parser')

// ==================== PRODUCTS ====================== //

router.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

router.get('/product/:skateID', (req, res) =>{
    products.fetchProduct(req, res)
})

router.post('/products', bodyParser.json(), (req, res) =>{
    products.addProduct(req, res)
})

router.patch('/product/:skateID', bodyParser.json(), (req, res) =>{
    products.updateProduct(req, res)
})

// ==================== USERS ====================== //

router.get('/users', (req, res) =>{
    users.fetchUsers(req, res)
})

router.post('/users', bodyParser.json(), (req, res) =>{
    users.registerUser(req, res)
})

// ==================== FILTER ====================== //

router.get('/sortprob', (req, res) =>{
    products.sortProd(req, res)
})

router.get('/sortprice', (req, res) =>{
    products.sortPrice(req, res)
})

router.get('/trucks', (req, res) =>{
    products.showTrucks(req, res)
})

router.get('/category/:category', (req, res)=>{
    products.probCategory(req, res)
})

router.get('/featured', (req, res) =>{
    products.featureProds(req, res)
})

module.exports = {
    express,
    router
}
