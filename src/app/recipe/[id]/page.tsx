import api from '@/api'
import {
  formatIngredientName,
  formatInstructions,
  getMainIngredients,
} from '../../../utils'
import Link from 'next/link'

export default async function RecipePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const meal = await api.getById(id)
  const ingredients = getMainIngredients(meal)

  return (
    <section className='mt-5 flex flex-col items-center gap-y-5 p-5'>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex w-full flex-col items-center gap-y-1 md:items-start lg:w-2/5'>
          <h2 className='text-3xl font-bold text-black'>
            {meal.strMeal}
            {' - '}
            <Link
              className='text-[#bd690f] underline'
              href={`/search/category/${meal.strCategory}`}
            >
              {meal.strCategory}
            </Link>
          </h2>
          <div>
            <img
              alt={meal.strMeal}
              src={meal.strMealThumb}
              className='h-[380px] w-[380px] object-cover md:h-[420px] md:w-[420px]'
            />
            <div className='mt-2 flex flex-wrap gap-2 md:flex-row'>
              {meal.strTags?.length > 0
                ? meal.strTags.split(',').map((tag) => (
                    <span
                      className='w-fit select-none rounded-lg border-[1px] border-[#c6c4d4] bg-[#f1f0f4] px-2 py-1 text-[#bd690f]'
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className='mt-10 flex w-full flex-col items-start lg:mt-0 lg:w-3/5 lg:items-start'>
          <h2 className='text-2xl font-semibold text-black'>Ingredients</h2>
          <div className='flex flex-row flex-wrap justify-start gap-y-5 lg:justify-center'>
            {ingredients.map((ingredient) => (
              <Link
                key={ingredient.name + ingredient.measure}
                className='flex w-32 flex-col items-center justify-center gap-y-2 text-center lg:w-52'
                href={`/search/ingredient/${formatIngredientName(ingredient.name)}`}
              >
                <img
                  alt={ingredient.name}
                  className='h-32 w-32 lg:h-52 lg:w-52'
                  src={ingredient.image}
                />
                <span className='text-[#bd690f]'>
                  {ingredient.measure}
                  {ingredient.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {meal.strInstructions.length > 0 ? (
        <div className='mt-10 flex w-4/5 flex-col items-center'>
          <h2 className='text-4xl font-bold text-black'>Instructions</h2>
          {meal.strYoutube !== null && meal.strYoutube !== '' ? (
            <a
              className='text-[#bd690f] underline'
              href={meal.strYoutube}
              target='_blank'
            >
              Video tutorial
            </a>
          ) : null}
          <ul className='mt-5 flex flex-col text-black'>
            {formatInstructions(meal.strInstructions).map(
              (instruction, index) => (
                <li
                  className='mb-2 list-disc text-base'
                  key={index}
                >
                  {instruction}
                </li>
              )
            )}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
