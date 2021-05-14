const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "do not forget to enter type of workout"
            },
            name: {
                type: String,
                required: "do not forget to enter name of exercise"
            },
            duration: {
                type: Number,
                required: "do not forget to enterduration of workout"
            },
            weight: {
                type: Number,
                required: "do not forget to enter weight of workout"
            },
            reps: {
                type: Number,
                required: "do not forget to enter number of reps performed"
            },
            sets: {
                type: Number,
                required: "do not forget to enter number of sets performed"
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;