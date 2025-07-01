import { FiChevronLeft, FiUser } from 'react-icons/fi'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import IconButton from './IconButton'

export default function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <Inner>
        <IconButton aria-label="뒤로가기" onClick={() => navigate(-1)}>
          <FiChevronLeft size={24} />
        </IconButton>
        <Title>선물하기</Title>
        <IconButton aria-label="마이페이지" onClick={() => navigate('/login')}>
          <FiUser size={24} />
        </IconButton>
      </Inner>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  background-color: white;
  position: fixed;
`

const Inner = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.text.default};
`
