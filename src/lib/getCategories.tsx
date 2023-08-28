import { api } from './api'

export async function getCategories() {
  const { data } = await api.get('list')
  return res.data
}
