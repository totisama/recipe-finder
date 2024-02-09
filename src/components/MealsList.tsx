import { type Meals } from '@/types'
import Link from 'next/link'

export default function MealsList({ meals }: { meals: Meals }) {
  return (
    <section className='mt-4 flex w-full flex-wrap justify-center gap-x-3 text-center'>
      {meals.meals.map((meal) => (
        <Link
          data-testid='meal'
          key={meal.idMeal}
          className='flex flex-col items-center lg:w-60'
          href={`/recipe/${meal.idMeal}`}
        >
          <img
            className='h-52 w-52'
            src={meal.strMealThumb}
            alt='Meal image'
          />
          <span className='md:text-md text-sm text-[#d57d1f]'>
            {meal.strMeal}
          </span>
        </Link>
      ))}
    </section>
  )
}
