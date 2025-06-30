import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { BANNER_CONTENT } from '@/data/bannerContent'

// * 기타 배너 컨테이너
const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: ${theme.spacing.spacing4};

  background-color: ${theme.semanticColors.background.default};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// * 기타 배너 서브 컨테이너
const SubContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding: ${theme.spacing.spacing4} ${theme.spacing.spacing5};
  background-color: ${theme.semanticColors.brand.kakaoYellow};

  border: none;
  border-radius: ${theme.spacing.spacing4};

  font-size: ${theme.typography.body.body2Regular.fontSize};
  font-weight: ${theme.typography.body.body2Regular.fontWeight};
  line-height: ${theme.typography.body.body2Regular.lineHeight};

  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing1};
`

// * 기타 배너 서브 타이틀
const SubBannerTitle = styled.span`
  font-size: ${theme.typography.label.label2Regular.fontSize};
  font-weight: ${theme.typography.label.label2Regular.fontWeight};
  line-height: ${theme.typography.label.label2Regular.lineHeight};

  color: ${theme.semanticColors.text.sub};
`

// * 기타 배너 타이틀
const BannerTitle = styled.span`
  font-size: ${theme.typography.subtitle.subtitle2Bold.fontSize};
  font-weight: ${theme.typography.subtitle.subtitle2Bold.fontWeight};
  line-height: ${theme.typography.subtitle.subtitle2Bold.lineHeight};
`

// * 기타 배너
export const Banner = () => {
  return (
    <Container>
      <SubContainer>
        <SubBannerTitle>{BANNER_CONTENT.subTitle}</SubBannerTitle>
        <BannerTitle>{BANNER_CONTENT.mainTitle}</BannerTitle>
      </SubContainer>
    </Container>
  )
}
