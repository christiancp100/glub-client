import { tickets } from './mock'

export const useGetTickets = () => {
  const data = tickets
  const loading = false
  const error = null
  return { data, loading, error }
}
