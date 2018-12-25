const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const dist = path.resolve(__dirname,`../../dist`)
console.log()
const mainpageHTML =`./mainpage.html`

router.get(`/sanity`,function(req,res){
    res.send(`It Works!`)
})

router.get(`/`,function(req,res){
    res.sendFile(mainpageHTML, {root: dist})
})




module.exports = router