var db = require("../models");

module.exports = function (app) {
    //Route to add a new workout 
    app.post("/api/workouts", function (req, res) {
        console.log(req.body)
        db.Workout.create(req.body)
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // Route to find all workouts
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
    // Route to get the last workout
    app.get("/api/workouts", function (req, res) {
        db.Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
    // Route to update existing workout by ID
    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.findOneAndUpdate(req.params.id, { $push: { exercises: req.body } })
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });
};