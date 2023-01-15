// get all the workouts
const getWorkouts = (req, res) => {
  res.status(200).json({ msg: 'GET workouts (controller)' })
}

// get a single workout
const getWorkout = (req, res) => {
  res.status(200).json({ msg: 'GET workout by ID (controller)' })
}

// create a new workout
const createWorkout = (req, res) => {
  res.status(200).json({ msg: 'POST workout (controller)' })
}

// delete a workout
const deleteWorkout = (req, res) => {
  res.status(200).json({ msg: 'DELETE workout (controller)' })
}

// update workout
const updateWorkout = (req, res) => {
  res.status(200).json({ msg: 'PATCH workout by ID (contoller)' })
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
}
