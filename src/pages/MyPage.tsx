import Header from '@/components/Header'
import GlobalStyle from '@/styles/GlobalStyle'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function MyPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  
  const nickname = user?.nickname || ''
  const email = user?.email || ''

  return (
    <div>
      <GlobalStyle />
      <Header />
      <div >
        <div >
          <div>마이 페이지</div>
          <div >
            {nickname}님 안녕하세요!<br />
            이메일 주소는 {email}입니다.
          </div>
          <button 
            onClick={() => {
              logout();
              navigate('/login');
            }}
            style={{
              padding: '8px 20px',
              background: '#f2f2f2',
              color: '#444',
              border: 'none',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              marginTop: 8
            }}
          >
            로그아웃
          </button>
        </div>
        <div />
      </div>
    </div>
  )
}

export default MyPage