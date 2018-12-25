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
    organiziation: Boolean
})

const Organiziation = mongoose.model("Organization", OrganizationSchema)
const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const Food = mongoose.model("Food", FoodSchema)

module.exports = Organiziation
module.exports = Restaurant
module.exports = Food