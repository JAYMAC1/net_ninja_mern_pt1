// import packages
const mongoose = require('mongoose')

// import workout model
const Workout = require('../Models/workoutModel')

// get all the workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  if (workouts) {
    res.status(200).json(workouts)
  }
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }
  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ msg: ' no document found!' })
  }
  res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.isValid(id)) {
    return res.status(404).json({ error: 'Workot not found!!' })
  }
  const workout = await Workout.findByIdAndDelete({ _id: id })
  if (!workout) {
    return res.status(404).json({ error: 'Workot not found!!' })
  }
  res.status(200).json(workout)
}

// update workout
const updateWorkout = (req, res) => {
  const { id } = req.params

  res.status(200).json({ msg: 'PATCH workout by ID (contoller)' })
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
}
