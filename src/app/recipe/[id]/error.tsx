'use client'

import ErrorComponent from '@/components/ErrorComponent'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return <ErrorComponent error={String(error)} />
}
