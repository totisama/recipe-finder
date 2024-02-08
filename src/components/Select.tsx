'use client'

import { AREAS } from '@/const'
import { type ChangeEvent } from 'react'

interface SelectProps {
  area: string
  changeArea: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ area, changeArea }: SelectProps) {
  return (
    <div className='flex items-center gap-4'>
      <label
        className='text-xl text-white'
        htmlFor='area'
      >
        Select an area
      </label>
      <select
        data-testid='select'
        id='area'
        className='rounded-md px-4 py-2'
        onChange={(e) => {
          changeArea(e)
        }}
        defaultValue={area}
      >
        {AREAS.map((area) => (
          <option
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
