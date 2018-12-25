const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const dist = path.resolve(__dirname, `../../dist`)

const mainpageHTML = `./mainpage.html`
const orgHTML = `./org.html`
const restHTML = `./restaurant.html`

const getData = async function (userName) {
    let data = await db.findOne(user => user.username === username)
    return data
}

router.get(`/sanity`, function (req, res) {
    res.send(`It Works!`)
})

router.get(`/`, function (req, res) {
    res.sendFile(mainpageHTML, { root: dist })
})
router.get(`/orgData/:orgName`, async function (req, res) {
    res.send(await getData(req.params.orgName))
})
router.get(`/restData/:restName`, async function (req, res) {
    res.send(await getData(req.params.restName))
})
router.post(`/restData`, food, function (req, res) {
    let newFood = new food(food)
    newFood.save()
    res.send(`Saved`)
})
router.get(`/site/:userName`, function (req, res) {
    let place = getData(req.params.userName)
    if (place instanceof org) {
        res.sendFile(orgHTML, { root: dist })
    } else if (place instanceof rest) {
        res.sendFile(restHTML, { root: dist })
    } else {
        res.send(`No a User`)
    }
})








module.exports = router