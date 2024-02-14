import { type Meals } from '@/types'
import Link from 'next/link'

export default function MealsList({ meals }: { meals: Meals }) {
  return (
    <section className='mt-8 flex w-full flex-wrap justify-center gap-5 text-center'>
      {meals.meals.map((meal) => (
        <Link
          data-testid='meal'
          key={meal.idMeal}
          className='flex w-48 flex-col items-center rounded-md border-2 border-[#c6c4d4] bg-[#f1f0f4] px-2 py-3 shadow-md lg:w-60 lg:px-0'
          href={`/recipe/${meal.idMeal}`}
        >
          <img
            className='h-40 w-40 lg:h-52 lg:w-52'
            src={meal.strMealThumb}
            alt='Meal image'
          />
          <span className='mt-2 text-sm text-[#bd690f] md:text-base'>
            {meal.strMeal}
          </span>
        </Link>
      ))}
    </section>
  )
}
