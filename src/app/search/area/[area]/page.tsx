import api from '@/api'
import HomePage from '@/components/HomePage'
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
        shownFilters={{ select: true, letters: false }}
      />
      <HomePage meals={meals} />
    </div>
  )
}
