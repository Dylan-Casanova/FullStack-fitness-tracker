const router = require("express").Router();
const Workout = require("../models/workout.js");

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes