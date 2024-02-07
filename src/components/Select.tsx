'use client'

import { AREAS } from '@/const'
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'
// import { type ChangeEvent } from 'react'

export default function Select() {
  // const searchParams = useSearchParams()
  // const pathname = usePathname()
  // const router = useRouter()

  // const changeArea = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const params = new URLSearchParams(searchParams)
  //   const area = event.target.value

  //   if (area !== null && area !== '') {
  //     params.set('area', area)
  //   } else {
  //     params.delete('area')
  //   }

  //   router.replace(`${pathname}?${params.toString()}`)
  // }

  return (
    <div className='flex items-center gap-4'>
      <label
        className='text-xl text-white'
        htmlFor='area'
      >
        Select an area
      </label>
      <select
        role='combobox'
        data-testid='select'
        id='area'
        className='rounded-md px-4 py-2'
      >
        {AREAS.map((area) => (
          <option
            role='option'
            data-testid={`select-option-${area}`}
            key={area}
            value={area}
          >
            {area}
          </option>
        ))}
      </select>
    </div>
  )
}
