import api from '@/api'
import { formatInstructions, getMainIngredients } from '../../../utils'

export default async function RecipePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const meal = await api.getById(id)
  const ingredients = getMainIngredients(meal)

  return (
    <section className='mt-12 flex w-full flex-col items-center justify-start gap-y-5'>
      <div className='flex w-full flex-col'>
        <div className='flex w-full gap-y-5'>
          <h2 className='w-2/5 text-3xl font-bold text-white'>
            {meal.strMeal}
          </h2>
          <h2 className='ml-16 w-3/5 text-xl font-medium text-white'>
            Ingredients
          </h2>
        </div>
        <div className='align-center mt-5 flex'>
          <div className='w-2/5'>
            <img
              alt={meal.strMeal}
              src={meal.strMealThumb}
              className='h-[200px] w-[200px] lg:h-[500px] lg:w-[500px]'
            />
            <div className='mt-4 flex flex-wrap gap-2 md:flex-row'>
              {meal.strTags.split(',').map((tag) => (
                <span
                  className='w-fit rounded-lg bg-slate-100 px-2 py-1 text-black'
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className='flex w-3/5 flex-row flex-wrap justify-center gap-y-10'>
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.name + ingredient.measure}
                className='flex flex-col items-center justify-center gap-y-2'
              >
                <img
                  alt={ingredient.name}
                  className='h-32 w-32 md:h-52 md:w-52'
                  src={ingredient.image}
                />
                <span className='text-[#d57d1f]'>
                  {ingredient.measure}
                  {ingredient.name}
                </span>
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
