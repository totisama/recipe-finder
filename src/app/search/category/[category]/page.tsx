import api from '@/api'
import MealsList from '@/components/MealsList'
import Filters from '@/components/Filters'

export default async function Category({
  params: { category },
}: {
  params: { category: string }
}) {
  const meals = await api.getByCategory(category)

  return (
    <div className='flex flex-col'>
      <Filters
        category={category}
        shownFilters={{ area: false, letters: false, category: true }}
      />
      <MealsList meals={meals} />
    </div>
  )
}
