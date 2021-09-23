import { events } from './mock'

export const useGetEvents = () => {
  const data = events
  const loading = false
  const error = null
  return { data, loading, error }
}
