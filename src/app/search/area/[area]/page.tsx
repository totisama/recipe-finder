import api from '@/api'
import MealsList from '@/components/MealsList'
import Filters from '@/components/Filters'

export default async function Area({
  params: { area },
}: {
  params: { area: string }
}) {
  const meals = await api.getByArea(area)

  return (
    <div className='flex flex-col'>
      <Filters
        area={area}
        shownFilters={{
          areas: true,
          letters: false,
          categories: false,
          ingredients: false,
        }}
      />
      <MealsList meals={meals} />
    </div>
  )
}
