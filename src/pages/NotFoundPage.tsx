import { Navbar } from '@/components/Navbar/Navbar'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <Wrapper>
        <Message>
          잘못된 접근입니다. <br />
          <SubMessage>찾으시는 페이지가 존재하지 않습니다.</SubMessage>
        </Message>
        <HomeButton onClick={() => navigate('/')}>홈으로</HomeButton>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
`

const Message = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.5;
`

const SubMessage = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray700};
  margin-top: 8px;
`

const HomeButton = styled.button`
  padding: 14px 54px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  color: black;
  font-size: 14px;
  font-weight: normal;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
`
