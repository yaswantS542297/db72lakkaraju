const mongoose = require("mongoose")
const smartphoneSchema = mongoose.Schema({
name: {
    type: String,
    minLength: 10
        },
brand: String,
cost :{ 
    type: Number,
    min:1,
    max:100,
}
})
module.exports = mongoose.model("smartphone", smartphoneSchema)