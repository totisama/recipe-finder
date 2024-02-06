import api from '@/api'
import Image from 'next/image'
import { formatInstructions, getMainIngredients } from '../../../utils'

export default async function RecipePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const meal = await api.getById(id)
  const ingredients = getMainIngredients(meal)

  return (
    <section className='flex w-full flex-col items-center justify-start gap-y-5'>
      <div className='flex w-full flex-col md:flex-row md:justify-center md:gap-x-36'>
        <div className='flex flex-col gap-y-5 md:w-2/5'>
          <h2 className='text-3xl font-bold text-white'>{meal.strMeal}</h2>
          <Image
            alt={meal.strMeal}
            src={meal.strMealThumb}
            className='h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]'
            width={700}
            height={700}
          />
          <div className='flex gap-x-5'>
            {meal.strTags.split(',').map((tag) => (
              <span
                className='rounded-lg bg-slate-100 px-2 py-1 text-black'
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='align-center mt-12 md:w-3/5'>
          <h2 className='text-xl font-medium text-white'>Ingredients</h2>
          <div className='mt-10 flex flex-row flex-wrap gap-y-10'>
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.name}
                className='flex flex-col items-center justify-center gap-y-2'
              >
                <Image
                  alt={ingredient.name}
                  className='h-32 w-32 md:h-52 md:w-52'
                  src={ingredient.image}
                  width={700}
                  height={700}
                />
                <span className='text-[#d57d1f]'>{ingredient.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-10 flex h-80 w-4/5 flex-col items-center gap-y-5'>
        <h2 className='text-2xl font-bold text-white'>Instructions</h2>
        <ul className='flex flex-col items-center text-center text-white'>
          {formatInstructions(meal.strInstructions).map(
            (instruction, index) => (
              <li
                className='mb-2 text-sm'
                key={index}
              >
                {instruction}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}
