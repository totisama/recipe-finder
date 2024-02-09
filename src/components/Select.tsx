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
    <div className='flex items-center gap-4'>
      <label
        className='text-xl text-white'
        htmlFor={`select-${value}`}
      >
        {text}
      </label>
      <select
        data-testid='select'
        id={`select-${value}`}
        className='rounded-md px-4 py-2'
        onChange={(e) => {
          onChange(e, type)
        }}
        defaultValue={value}
      >
        <option
          data-testid={`null`}
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
