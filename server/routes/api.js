const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const mongoose = require(`mongoose`)
//What is the name of the DB?


const dist = path.resolve(__dirname, `../../dist`)
const schemas = require('../model/schemas')
const Food = schemas.food
const User = schemas.user

router.get(`/sanity`, function (req, res) {
    res.send(`It Works!`)
})
router.post(`/food`, function (req, res) {
    let newFood = new Food(req.body.food)
    newFood.save()
    res.send(`Saved`)
})
router.get(`/site/:userName`, async function (req, res) {
    res.send(await User.find({ name: req.params.userName }))
})
router.put(`/food/:foodId`, function (req, res) {
    Food.findByIdAndUpdate(req.params.foodId, {
        $set: {
            organization: "false"
        }
    }, function (err, res) {
        console.log(res + err)
    })
    res.end()
})








module.exports = router