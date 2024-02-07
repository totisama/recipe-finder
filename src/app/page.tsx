import api from '@/api'
import Filters from '@/components/Filters'
import HomePage from '@/components/Home'

export default async function Home() {
  const meals = await api.getByArea('Canadian')

  return (
    <>
      <Filters />
      <HomePage meals={meals} />
    </>
  )
}
