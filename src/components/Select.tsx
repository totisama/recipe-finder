import { AREAS } from '@/const'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { type ChangeEvent } from 'react'

export default function Select() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const changeArea = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams)
    const area = event.target.value

    if (area !== null) {
      params.set('area', area)
    } else {
      params.delete(area)
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <label htmlFor='area'>Select an Area</label>
      <select
        id='area'
        className='rounded-md px-4 py-2'
        onChange={(e) => {
          changeArea(e)
        }}
      >
        {AREAS.map((area) => (
          <option
            key={area}
            value={area}
          >
            {area}
          </option>
        ))}
      </select>
    </>
  )
}
