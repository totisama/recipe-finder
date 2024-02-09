import api from '@/api'
import Filters from '@/components/Filters'
import MealsList from '@/components/MealsList'

export default async function Home() {
  const meals = await api.getByArea('American')

  return (
    <>
      <Filters
        area={''}
        category={''}
        shownFilters={{ area: true, letters: true, category: true }}
      />
      <MealsList meals={meals} />
    </>
  )
}
