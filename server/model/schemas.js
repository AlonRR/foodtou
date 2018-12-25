const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const organizationSchema = new Schema({
    username: String,
    password: String,
    location: String,
    food: [{ type:}]
})

const foodSchema = new Schema({
    name: String,
    amount: Number,
    
})