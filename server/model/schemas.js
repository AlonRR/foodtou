const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const OrganizationSchema = new Schema({
    username: String,
    password: String,
    location: String,
    food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
})

const RestaurantSchema = new Schema({
    username: String,
    password: String,
    location: String,
    food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
})

const FoodSchema = new Schema({
    name: String,
    expirationDate: String,
    amount: Number,
    unit: String,
    restaurant: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
    organization: true //default:true
})

const Organization = mongoose.model("Organization", OrganizationSchema)
const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const Food = mongoose.model("Food", FoodSchema)

<<<<<<< HEAD
module.exports = Organization
module.exports = Restaurant
module.exports = Food
=======
module.exports = {
    org: Organiziation,
    res: Restaurant,
    food: Food
}   
>>>>>>> 4353765c40402dedfb87801214c30b00ca68f540
