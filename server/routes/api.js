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
    let newFood = new Food(req.body)
    newFood.save()
    res.send(`Saved`)
})
router.get(`/site/:userName`, async function (req, res) {
    let data = await User.findOne({ name: req.params.userName })
    if (data.type === `org`) {
        let foods = await Food.find({ organization: true })
        foods.forEach(food => data.food.push(food))
    }
    res.send(data)
})
router.put(`/food/:foodId`, function (req, res) {
    let data = req.params.foodId
    Food.findByIdAndUpdate(data, {
        $set: {
            organization: "false"
        }
    }, function (err, res) {
        console.log(res + err)
    })
    res.end()
})
router.get('/foods/:foodsId', function (req, res) {
    let data = req.params.foodsId
    Food.findById(data, function (err, rest) {
        User.findById(rest.restaurant, function (err, resto) {
            res.send(resto.name)
        })
    })
})

module.exports = router