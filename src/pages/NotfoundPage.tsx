import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Image src="/img_not_found.png" alt="Not found" />
      <Title>잘못된 접근입니다.</Title>
      <Description>찾으시는 페이지가 존재하지 않습니다.</Description>
      <Button onClick={() => navigate('/')}>홈으로</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px); /* Header 제외한 높이 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

const Title = styled.h1`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-top: 28px;
`

const Description = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray[700]};
`

const Button = styled.button`
  margin-top: 48px;
  height: 48px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.typography.body1Regular};
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  &:hover {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.kakao.yellow.pressed};
  }
`
