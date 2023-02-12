import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkOuts } = useWorkoutsContext()
  const logout = () => {
    // remove user from localStorage
    localStorage.removeItem('user')

    //  dipsatch logout function
    dispatch({ type: 'LOGOUT' })
    dispatchWorkOuts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { logout }
}
