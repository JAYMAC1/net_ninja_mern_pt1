const getWorkouts = (req, res) => {
  res.status(200).json({ msg: 'GET workouts (controller)' })
}
const getWorkout = (req, res) => {
  res.status(200).json({ msg: 'GET workout by ID (controller)' })
}
const createWorkout = (req, res) => {
  res.status(200).json({ msg: 'POST workout (controller)' })
}
const deleteWorkout = (req, res) => {
  res.status(200).json({ msg: 'DELETE workout (controller)' })
}
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
