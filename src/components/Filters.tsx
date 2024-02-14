'use client'

import Select from './Select'
import { useRouter } from 'next/navigation'
import Letters from './Letters'
import { type ChangeEvent } from 'react'
import { type ShownFiltersType, type SelectOptions } from '@/types'
import { LETTERS } from '@/const'

export default function Filters({
  shownFilters,
  area,
  category,
  ingredient,
  letter,
  options,
}: {
  shownFilters: ShownFiltersType
  area?: string
  category?: string
  letter?: string
  ingredient?: string
  options: SelectOptions
}) {
  const router = useRouter()

  const selectOnChange = (
    event: ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    const areaValue = event.target.value

    if (areaValue === '') {
      router.replace(`/`)
      return
    }

    router.push(`/search/${type}/${areaValue}`)
  }

  const changeLetter = (letter: string) => {
    if (letter === '') {
      router.replace(`/`)
      return
    }

    router.push(`/search/letter/${letter}`)
  }

  return (
    <section className='flex w-full flex-col items-center space-y-5'>
      <div className='flex flex-col items-start justify-between gap-y-2 md:flex-row md:gap-x-10'>
        {shownFilters.areas && (
          <Select
            value={String(area)}
            onChange={selectOnChange}
            type={'area'}
            options={options?.areas ?? []}
            text={'Area:'}
          />
        )}
        {shownFilters.categories && (
          <Select
            value={String(category)}
            onChange={selectOnChange}
            type={'category'}
            options={options?.categories ?? []}
            text={'Category:'}
          />
        )}
        {shownFilters.ingredients && (
          <Select
            value={String(ingredient)}
            onChange={selectOnChange}
            type={'ingredient'}
            options={options?.ingredients ?? []}
            text={'Ingredient:'}
          />
        )}
        {shownFilters.letters && (
          <div className='block sm:hidden'>
            <Select
              value={String(letter)}
              onChange={selectOnChange}
              type={'letter'}
              options={LETTERS}
              text={'Letter:'}
            />
          </div>
        )}
      </div>
      {shownFilters.letters && <Letters changeLetter={changeLetter} />}
    </section>
  )
}
