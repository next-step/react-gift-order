import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  text-align: center;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  font-weight: 500;
  color: #000;
`

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Title>잘못된 접근입니다.</Title>
      <Description>찾으시는 페이지가 존재하지 않습니다.</Description>
      <Button onClick={() => navigate('/')}>홈으로</Button>
    </Wrapper>
  )
}

export default NotFoundPage
