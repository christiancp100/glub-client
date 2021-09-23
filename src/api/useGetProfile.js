import { profiles } from './mock'

export const useGetProfile = () => {
  const userId = profiles[0].id
  let loading = true
  const data = profiles.find(({ id }) => id === userId)
  loading = false
  const error = null
  return { data, loading, error }
}
