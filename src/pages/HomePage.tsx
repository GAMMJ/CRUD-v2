import { useNavigate } from 'react-router'
import { useAuth } from '@/hooks/useAuth'

export default function HomePage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <main>
      <h1>홈</h1>
      <p>{user?.email} 님, 환영합니다!</p>
      <button onClick={handleSignOut}>로그아웃</button>
    </main>
  )
}
