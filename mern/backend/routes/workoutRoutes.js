const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'GET workouts (routes)' })
})
router.get('/:id', (req, res) => {
  res.status(200).json({ msg: 'GET workout by ID (routes)' })
})
router.post('/', (req, res) => {
  res.status(200).json({ msg: 'POST workout (routes)' })
})
router.delete('/:id', (req, res) => {
  res.status(200).json({ msg: 'DELETE workout by ID (routes)' })
})
router.patch('/:id', (req, res) => {
  res.status(200).json({ msg: 'PATCH workout by ID (routes)' })
})

module.exports = router
