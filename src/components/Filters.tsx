'use client'

import Select from './Select'
import { useRouter } from 'next/navigation'
import Letters from './Letters'
import { type ChangeEvent } from 'react'
import { type ShownFiltersType } from '@/types'

export default function Filters({
  shownFilters,
  area,
}: {
  shownFilters: ShownFiltersType
  area: string
}) {
  const router = useRouter()

  const changeArea = (event: ChangeEvent<HTMLSelectElement>) => {
    const areaValue = event.target.value

    if (areaValue === '') {
      router.replace(`/`)
      return
    }

    router.push(`/search/area/${areaValue}`)
  }

  const changeLetter = (letter: string) => {
    if (letter === '') {
      router.replace(`/`)
      return
    }

    router.push(`/search/letter/${letter}`)
  }

  return (
    <section className='mt-12 flex w-full flex-col flex-wrap items-center gap-3'>
      {shownFilters.select && (
        <Select
          area={area}
          changeArea={changeArea}
        />
      )}
      {shownFilters.letters && <Letters changeLetter={changeLetter} />}
    </section>
  )
}
