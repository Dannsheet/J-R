import { useCallback, useState } from 'react'

export default function useAsync(fn) {
  const [state, setState] = useState({ status: 'idle', error: null })

  const run = useCallback(
    async (...args) => {
      setState({ status: 'loading', error: null })
      try {
        const result = await fn(...args)
        setState({ status: 'success', error: null })
        return result
      } catch (err) {
        setState({ status: 'error', error: err })
        throw err
      }
    },
    [fn],
  )

  return { ...state, run }
}
