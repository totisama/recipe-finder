import api from '@/api'
import HomePage from '@/components/HomePage'
import Filters from '@/components/Filters'

export default async function Letter({
  params: { letter },
}: {
  params: { letter: string }
}) {
  const meals = await api.getByLetter(letter)

  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <Filters
        area={''}
        shownFilters={{ select: false, letters: true }}
      />
      <HomePage meals={meals} />
    </div>
  )
}
