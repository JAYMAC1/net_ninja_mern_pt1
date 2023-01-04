import { WorkoutsContext } from '../context/workoutsContext'
import { useContext } from 'react'

import React from 'react'

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error(
      'useWorkoutsContext must be used inside an WorkoutsContext Provider'
    )
  }

  return context
}

export default useWorkoutsContext
