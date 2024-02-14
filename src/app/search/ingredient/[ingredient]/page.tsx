import api from '@/api'
import Filters from '@/components/Filters'
import MealsList from '@/components/MealsList'
import { toTitleCase } from '@/utils'

export default async function Area({
  params: { ingredient },
}: {
  params: { ingredient: string }
}) {
  const meals = await api.getByIngredient(ingredient)
  const ingredients = await api.getIngredients()
  const formattedIngredient = ingredient
    .replace('_', ' ')
    .replaceAll('%20', ' ')

  return (
    <div className='flex flex-col'>
      <Filters
        ingredient={toTitleCase(formattedIngredient)}
        options={{ ingredients }}
        shownFilters={{
          ingredients: true,
        }}
      />
      <MealsList meals={meals} />
    </div>
  )
}
