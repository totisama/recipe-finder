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
        shownFilters={{ area: true, letters: false, category: false }}
      />
      <MealsList meals={meals} />
    </div>
  )
}
