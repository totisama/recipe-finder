import Image from 'next/image'
import Link from 'next/link'
import api from '@/api'

export default async function Home() {
  const meals = await api.getByArea('Canadian')

  return (
    <section className='flex w-full flex-wrap gap-x-9 gap-y-4'>
      {meals.meals.map((meal) => (
        <article
          key={meal.idMeal}
          className='flex flex-col items-center justify-center rounded-md bg-slate-50 p-3'
        >
          <Image
            className='h-52 w-52'
            src={meal.strMealThumb}
            alt='Meal image'
            width={700}
            height={700}
          />
          <Link href={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
        </article>
      ))}
    </section>
  )
}
