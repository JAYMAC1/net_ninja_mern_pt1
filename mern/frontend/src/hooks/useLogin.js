import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const repsonse = await fetch('/api/users/login', {
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

  return { login, isLoading, error }
}
