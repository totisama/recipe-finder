import api from '@/api'
import Filters from '@/components/Filters'
import MealsList from '@/components/MealsList'

export default async function Home() {
  const meals = await api.getByArea('American')
  const ingredients = await api.getIngredients()
  const areas = await api.getAreas()
  const categories = await api.getCategories()

  return (
    <>
      <Filters
        options={{ ingredients, areas, categories }}
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
