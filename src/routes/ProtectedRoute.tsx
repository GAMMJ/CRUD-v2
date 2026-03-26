import { Navigate } from 'react-router'
import { useAtomValue } from 'jotai'
import { userAtom, authLoadingAtom } from '@/store/authStore'

interface Props {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const user = useAtomValue(userAtom)
  const loading = useAtomValue(authLoadingAtom)

  if (loading) return <div>로딩 중...</div>
  if (!user) return <Navigate to="/login" replace />

  return <>{children}</>
}
