const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const dist = path.resolve(__dirname,`../dist`)
const mainpageHTML =`../dist/mainpage/mainpage.html`
const organizationHTML = `./dist/organization/org.html`
const restaurantHTML = `.dist/restaurant/restaurant.html`

router.get(`/sanity`,function(req,res){
    res.send(`It Works!`)
})
router.get(`/`,function(req,res){
    console.log()
    res.sendFile(mainpageHTML, {root: dist})
})

module.exports = router