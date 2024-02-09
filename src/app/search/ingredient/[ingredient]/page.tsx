import api from '@/api'
import MealsList from '@/components/MealsList'

export default async function Area({
  params: { ingredient },
}: {
  params: { ingredient: string }
}) {
  const meals = await api.getByIngredient(ingredient)

  return (
    <div className='mt-5 flex flex-col items-center'>
      <h2 className='text-bold text-3xl text-[#d57d1f]'>{ingredient}</h2>
      <MealsList meals={meals} />
    </div>
  )
}
