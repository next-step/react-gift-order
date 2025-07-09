import styled from '@emotion/styled'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar/Navbar'
import { Layout } from '@/components/Layout/Layout'

export function MyPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <Layout>
        <Navbar />
        <Wrapper>
          <Title>마이 페이지</Title>
          <Message>
            {user?.split('@')[0]}님 안녕하세요! <br />
            이메일 주소는 {user}입니다.
          </Message>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 25rem;
  margin: 2.5rem 0.5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 1.375rem;
  line-height: 1.5;
`

const LogoutButton = styled.button`
  padding: 0.875rem 0.8125rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  color: #000;
  font-size: 0.875rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`
