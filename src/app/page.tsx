import api from '@/api'
import Filters from '@/components/Filters'
import HomePage from '@/components/HomePage'
// import { Suspense } from 'react'

export default async function Home() {
  const meals = await api.getByArea('American')

  return (
    <>
      {/* <Suspense> */}
      <Filters
        area={''}
        shownFilters={{ select: true, letters: true }}
      />
      {/* </Suspense> */}
      <HomePage meals={meals} />
    </>
  )
}
