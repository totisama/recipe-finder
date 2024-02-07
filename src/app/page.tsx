import api from '@/api'
import Filters from '@/components/Filters'
import HomePage from '@/components/Home'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    area: string
  }
}) {
  const area = searchParams?.area ?? 'Canadian'
  const meals = await api.getByArea(area)

  return (
    <>
      <Filters />
      <HomePage meals={meals} />
    </>
  )
}
