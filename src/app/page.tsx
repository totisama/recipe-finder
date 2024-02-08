import api from '@/api'
import Filters from '@/components/Filters'
import HomePage from '@/components/HomePage'

export default async function Home() {
  const meals = await api.getByArea('American')

  return (
    <>
      <Filters
        area={''}
        shownFilters={{ select: true, letters: true }}
      />
      <HomePage meals={meals} />
    </>
  )
}
