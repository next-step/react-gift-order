import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { PageContainer } from '@/components/common/PageContainer'
import { Button } from '@/components/common/Button'

// * 에러 텍스트
const Error = styled.div`
  font-size: 3.125rem; /* 50px */
  font-weight: ${theme.typography.title.title1Bold.fontWeight};
  margin-bottom: ${theme.spacing.spacing5};

  color: ${theme.semanticColors.status.critical};
`

// * 타이틀
const Title = styled.h1`
  font-size: ${theme.typography.title.title1Bold.fontSize};
  font-weight: ${theme.typography.title.title1Bold.fontWeight};
  line-height: ${theme.typography.title.title1Bold.lineHeight};

  color: ${theme.semanticColors.text.default};
`

// * 서브타이틀
const Subtitle = styled.p`
  font-size: ${theme.typography.subtitle.subtitle2Regular.fontSize};
  font-weight: ${theme.typography.subtitle.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle.subtitle2Regular.lineHeight};

  color: ${theme.semanticColors.text.sub};
  margin: ${theme.spacing.spacing3} 0 ${theme.spacing.spacing6};
`

// * 404 NotFound 페이지
export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Error>404 NotFound</Error>
      <Title>페이지를 찾을 수 없어요!</Title>
      <Subtitle>입력하신 주소에 해당하는 페이지가 없습니다.</Subtitle>
      <Button variant="kakao" size="small" onClick={() => navigate('/')}>
        홈으로 돌아가기
      </Button>
    </PageContainer>
  )
}
