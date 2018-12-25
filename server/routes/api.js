const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const dist = path.resolve(__dirname,`../../dist`)
const schemas = require('../model/schemas')
const Restaurants = schemas.res
const Organizations = schemas.org
const Foods = schemas.food

const mainpageHTML =`./mainpage.html`
const orgHTML = `./org.html`
const restHTML =  `./restaurant.html`

router.get(`/sanity`,function(req,res){
    res.send(`It Works!`)
})

router.get(`/`,function(req,res){
    res.sendFile(mainpageHTML, {root: dist})
})
router.get(`/orgData/:orgName`,function(req,res){
    Organizations.find({}, function(err, data){
        res.send(data)
    })
    
})
router.get(`/restData/:restName`,function(req,res){
    Organizations.find({}, function(err, data){
        res.send(data)
    })
})
router.post(`/restData`,function(req,res){

})









module.exports = router