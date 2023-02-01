import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const repsonse = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const json = await repsonse.json()

    if (!repsonse.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (repsonse.ok) {
      // store in localStorage
      localStorage.setItem('user', JSON.stringify(json))

      dispatch({ type: 'LOGIN', payload: json })
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
