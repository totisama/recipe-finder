'use client'

import { useRouter } from 'next/navigation'

export default function ErrorComponent({ error }: { error: string }) {
  const router = useRouter()

  const formatError = (error: string) => {
    const separatedError = error.split(':')

    return separatedError[1]
  }

  return (
    <div className='mt-5 flex flex-col items-center space-y-2'>
      <h2 className='text-2xl text-white'>{formatError(String(error))}</h2>
      <button
        className='w-[200px] rounded-md bg-[#bd690f] py-2 text-white'
        onClick={() => {
          router.push('/')
        }}
      >
        Return home
      </button>
    </div>
  )
}
