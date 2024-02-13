'use client'

import { type ChangeEvent } from 'react'

interface SelectProps {
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>, type: string) => void
  type: string
  options: string[]
  text: string
}

export default function Select({
  value,
  onChange,
  type,
  options,
  text,
}: SelectProps) {
  return (
    <div className='flex w-72 items-center gap-10 md:gap-4'>
      <label
        className='text-xl text-[#bd690f]'
        htmlFor={`select-${value}`}
      >
        {text}
      </label>
      <select
        data-testid='select'
        id={`select-${value}`}
        className='w-full rounded-md border-[2px] border-[#c6c4d4] bg-[#f1f0f4] px-4 py-2 md:w-auto'
        onChange={(e) => {
          onChange(e, type)
        }}
        defaultValue={value}
      >
        <option
          data-testid={null}
          value={''}
        >
          {' '}
        </option>
        {options.map((area) => (
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
