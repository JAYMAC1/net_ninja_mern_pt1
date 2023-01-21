import React, { useState } from 'react'

function WorkoutForm() {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, load, reps)
  }
  return <div>WorkoutForm</div>
}

export default WorkoutForm
