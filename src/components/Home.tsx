import Image from 'next/image'
import { MOCK_MEALS } from '@/const'

export default function Home() {
  return (
    <section className='flex w-full flex-wrap gap-x-9 gap-y-4'>
      {MOCK_MEALS.meals.map((meal) => (
        <article
          data-testid='meal'
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
        </article>
      ))}
    </section>
  )
}
