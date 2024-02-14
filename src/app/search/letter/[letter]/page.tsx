import api from '@/api'
import MealsList from '@/components/MealsList'
import Filters from '@/components/Filters'

export default async function Letter({
  params: { letter },
}: {
  params: { letter: string }
}) {
  const meals = await api.getByLetter(letter)

  return (
    <div className='flex flex-col items-center justify-center'>
      <Filters
        shownFilters={{
          letters: true,
        }}
      />
      <MealsList meals={meals} />
    </div>
  )
}
