const path = require('path');
const router = require('express').Router();
const mongoose = require('mongoose');
const Workout = require("../models/workout.js");
const db = require('../models');

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum : "$exercises.duration" }
      }
    }
  ])
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.get('/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum : "$exercises.duration" }
      }
    },
  ])
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.post("/workouts", (req, res) => {
  Workout.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const newExercise = req.body;
    const doc = await Workout.findOne({ _id: req.params.id });
    doc.exercises.push(newExercise);
    await doc.save();
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

module.exports = router;