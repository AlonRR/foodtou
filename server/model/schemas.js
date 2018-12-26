const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    password: String,
    location: String,
    type: String,
    boolean: Boolean,
    food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
})

const FoodSchema = new Schema({
    name: String,
    expirationDate: String,
    amount: Number,
    unit: String,
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    organization: Boolean
})

const User = mongoose.model("User", UserSchema)
const Food = mongoose.model("Food", FoodSchema)

module.exports = {
    user: User,
    food: Food
}   
