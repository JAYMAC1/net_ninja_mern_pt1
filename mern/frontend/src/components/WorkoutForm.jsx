import React, { useState } from 'react'

function WorkoutForm() {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, load, reps)
  }
  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label onsub>Exercise Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Load (kg):</label>
      <input
        type='number'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Reps:</label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm
