import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar/Navbar'

export function MyPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <Navbar />
      <h2>
        <strong>마이 페이지</strong>
      </h2>
      <h3>{user?.split('@')[0]}님 안녕하세요!</h3>
      <h3>이메일 주소는 {user}입니다.</h3>
      <button onClick={handleLogout}>로그아웃</button>
    </>
  )
}
