'use client'

import Select from './Select'
import { useRouter } from 'next/navigation'
import Letters from './Letters'
import { type ChangeEvent } from 'react'
import { type ShownFiltersType, type SelectOptions } from '@/types'
import { LETTERS } from '@/const'

export default function Filters({
  shownFilters = {
    areas: false,
    letters: false,
    categories: false,
    ingredients: false,
  },
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
  options?: SelectOptions
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
        {shownFilters.areas === true && (
          <Select
            value={area ?? ''}
            onChange={selectOnChange}
            type={'area'}
            options={options?.areas ?? []}
            text={'Area:'}
          />
        )}
        {shownFilters.categories === true && (
          <Select
            value={category ?? ''}
            onChange={selectOnChange}
            type={'category'}
            options={options?.categories ?? []}
            text={'Category:'}
          />
        )}
        {shownFilters.ingredients === true && (
          <Select
            value={ingredient ?? ''}
            onChange={selectOnChange}
            type={'ingredient'}
            options={options?.ingredients ?? []}
            text={'Ingredient:'}
          />
        )}
        {shownFilters.letters === true && (
          <div className='block sm:hidden'>
            <Select
              value={letter ?? ''}
              onChange={selectOnChange}
              type={'letter'}
              options={LETTERS}
              text={'Letter:'}
            />
          </div>
        )}
      </div>
      {shownFilters.letters === true && <Letters changeLetter={changeLetter} />}
    </section>
  )
}
