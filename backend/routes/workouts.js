const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({ message: 'GET all workouts' })
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET single workout' })
})

// POST a new workout
router.post('/', (req, res) => {
  res.json({ msg: 'POST a new workout' })
})

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a workout' })
})

// Update a workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'Update a workout' })
})

module.exports = router