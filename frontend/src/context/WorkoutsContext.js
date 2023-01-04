import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      }
      break
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      }
      break

    default:
      return state
      break
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  })

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  )
}
