const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{type: String, required: true},
    password:{type: String, required: true},
    location:{type: String, required: true},
    type:{type: String, required: true},
    boolean: Boolean,
    food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
})

const FoodSchema = new Schema({
    name: {type: String, required: true},
    expirationDate: {type: String, required: true},
    amount: {type: Number, required: true},
    unit: {type: String, required: true},
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    organization: Boolean
})

const User = mongoose.model("User", UserSchema)
const Food = mongoose.model("Food", FoodSchema)

module.exports = {
    user: User,
    food: Food
}   
