const mongoose = require("mongoose")
const smartphoneSchema = mongoose.Schema({
name: String,
brand: String,
cost: Number,

})
module.exports = mongoose.model("smartphone", smartphoneSchema)