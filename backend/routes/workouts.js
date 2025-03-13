const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get a single workoout
router.get("/:id", getWorkout);

// post a new workout

router.post("/", createWorkout);

// Deleet a workout

router.delete("/:id", deleteWorkout);

// UPDATE a workout

router.patch("/:id", updateWorkout);
module.exports = router;
