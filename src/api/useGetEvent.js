import { events } from './mock'

export const useGetEvent = ({ id: eventId }) => {
  let loading = true
  const data = events.find(({ id }) => id === eventId)
  loading = false
  const error = null
  return { data, loading, error }
}
