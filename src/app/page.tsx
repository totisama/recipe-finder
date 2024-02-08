import api from '@/api'
import Filters from '@/components/Filters'
import HomePage from '@/components/Home'
import { Suspense } from 'react'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    area: string
  }
}) {
  const area = searchParams?.area ?? 'American'
  const meals = await api.getByArea(area)

  return (
    <>
      <Suspense>
        <Filters />
      </Suspense>
      <HomePage meals={meals} />
    </>
  )
}
