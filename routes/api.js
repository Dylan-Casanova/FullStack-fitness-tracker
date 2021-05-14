const path = require('path');
const router = require('express').Router();
const mongoose = require('mongoose');
const Workout = require("../models/workout.js");
const db = require('../models');

router.get("/workouts", (req, res) => {
    Workout.aggrate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            },
        },
    ])
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
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
  
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;