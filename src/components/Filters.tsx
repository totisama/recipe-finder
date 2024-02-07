'use client'

import Select from './Select'
import { Suspense } from 'react'

export default function Filters() {
  return (
    <section className='mt-12 flex w-full flex-wrap justify-center gap-3'>
      <Suspense>
        <Select />
      </Suspense>
    </section>
  )
}
