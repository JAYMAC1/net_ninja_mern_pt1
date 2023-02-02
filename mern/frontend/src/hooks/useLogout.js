import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const logout = () => {
    // remove user from localStorage
    localStorage.removeItem('user')

    //  dipsatch logout function
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}
