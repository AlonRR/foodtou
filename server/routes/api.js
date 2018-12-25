const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const dist = path.resolve(__dirname,`../../dist`)

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
    db.find(``)
    res.send()
})
router.get(`/restData/:restName`,function(req,res){

})
router.post(`/restData`,food,function(req,res){

})









module.exports = router