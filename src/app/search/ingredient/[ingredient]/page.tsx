import api from '@/api'
import HomePage from '@/components/HomePage'

export default async function Area({
  params: { ingredient },
}: {
  params: { ingredient: string }
}) {
  const meals = await api.getByIngredient(ingredient)

  return (
    <div className='flex flex-col'>
      <HomePage meals={meals} />
    </div>
  )
}
