import api from '@/api'
import Filters from '@/components/Filters'
import MealsList from '@/components/MealsList'

export default async function Home() {
  const meals = await api.getByArea('American')
  const ingredients = await api.getIngredients()

  return (
    <>
      <Filters
        area={''}
        category={''}
        ingredient={''}
        options={{ ingredients }}
        shownFilters={{
          areas: true,
          letters: true,
          categories: true,
          ingredients: true,
        }}
      />
      <MealsList meals={meals} />
    </>
  )
}
