import Link from 'next/link'
import api from '@/api'
import Filters from '@/components/Filters'

export default async function Home() {
  const meals = await api.getByArea('Canadian')

  return (
    <>
      <Filters />
      <section className='mt-12 flex w-full flex-wrap justify-center gap-3'>
        {meals.meals.map((meal) => (
          <Link
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
    </>
  )
}
