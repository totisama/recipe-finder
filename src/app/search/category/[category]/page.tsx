import api from '@/api'
import MealsList from '@/components/MealsList'
import Filters from '@/components/Filters'

export default async function Category({
  params: { category },
}: {
  params: { category: string }
}) {
  const meals = await api.getByCategory(category)
  const categories = await api.getCategories()

  return (
    <div className='flex flex-col'>
      <Filters
        category={category}
        options={{ categories }}
        shownFilters={{
          areas: false,
          letters: false,
          categories: true,
          ingredients: false,
        }}
      />
      <MealsList meals={meals} />
    </div>
  )
}
