import api from '@/api'
import Image from 'next/image'

export default async function RecipePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const meal = await api.getById(id)
  const ingredients = await api.getMainIngredients(meal.strMeal)

  return (
    <section className='flex w-full flex-col items-start justify-start gap-y-5'>
      <h1 className='text-2xl font-bold text-white'>{meal.strMeal}</h1>
      <div className='flex w-full gap-x-10'>
        <Image
          alt={meal.strMeal}
          className='w-2/5'
          src={meal.strMealThumb}
          width={700}
          height={700}
        />
        <section className='align-center flex w-3/5 flex-col'>
          <h2 className='text-xl font-medium text-white'>Ingredients</h2>
          {ingredients.map((ingredient) => (
            <Image
              key={ingredient}
              alt={'Ingredient'}
              className='h-32 w-32'
              src={ingredient}
              width={700}
              height={700}
            />
          ))}
        </section>
      </div>
    </section>
  )
}
