import api from '@/api'
import MealsList from '@/components/MealsList'
import Filters from '@/components/Filters'

export default async function Area({
  params: { area },
}: {
  params: { area: string }
}) {
  const meals = await api.getByArea(area)
  const areas = await api.getAreas()

  return (
    <div className='flex flex-col'>
      <Filters
        area={area}
        options={{ areas }}
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
