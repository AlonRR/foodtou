const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const api = require('./server/routes/api')
const schemas = require('./server/model/schemas')
const Restaurants = schemas.res
const Organizations = schemas.org
const Foods = schemas.food
const jsonData = require('./dummy-data/fakeData')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/Food2You', { useNewUrlParser: true })
app.use('/', api)

let saveToDB = () => {
    for (let i of jsonData.organization) {
        let RestaurantsData = new Restaurants(i)
        // RestaurantsData.save()
    }
    for (let i of jsonData.restaurant) {
        let OrganizationsData = new Organizations(i)
        // OrganizationsData.save()
    }
    for (let i of jsonData.Food) {
        let FoodData = new Foods(i)
        // FoodData.save()
    }
}
saveToDB()

const port = 4000
app.listen(port, function () {
    console.log(`Runnig on port ${port}`)
})
