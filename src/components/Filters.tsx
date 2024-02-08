'use client'

import Select from './Select'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { type ChangeEvent } from 'react'

export default function Filters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const changeArea = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams)
    const area = event.target.value

    if (area !== null && area !== '') {
      params.set('area', area)
    } else {
      params.delete('area')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <section className='mt-12 flex w-full flex-wrap justify-center gap-3'>
      <Select changeArea={changeArea} />
    </section>
  )
}
