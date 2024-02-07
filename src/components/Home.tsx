import { type Meals } from '@/types'
import Link from 'next/link'

export default function HomePage({ meals }: { meals: Meals }) {
  return (
    <section className='mt-4 flex w-full flex-wrap justify-center gap-3'>
      {meals.meals.map((meal) => (
        <Link
          data-testid='meal'
          key={meal.idMeal}
          className='flex flex-col items-center p-3'
          href={`/recipe/${meal.idMeal}`}
        >
          <img
            className='h-52 w-52'
            src={meal.strMealThumb}
            alt='Meal image'
          />
          <span className='text-sm text-[#d57d1f] md:text-lg'>
            {meal.strMeal}
          </span>
        </Link>
      ))}
    </section>
  )
}
