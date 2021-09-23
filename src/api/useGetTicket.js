import { events } from './mock'

export const useGetEvent = ({ id: ticketId }) => {
  let loading = true
  const data = events.find(({ id }) => id === ticketId)
  loading = false
  const error = null
  return { data, loading, error }
}
