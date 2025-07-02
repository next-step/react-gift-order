import styled from '@emotion/styled'

const PromoBannerWrapper = styled.div`
  width: auto;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0px 20px;
  padding: 15px;
`

const PromoBannerWrapperTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray[700]};
`
const PromoBannerWrapperSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray[1000]};
`

function PromoBanner() {

    return (
        <PromoBannerWrapper>
            <PromoBannerWrapperTitle>카카오테크 캠퍼스 3기여러분</PromoBannerWrapperTitle>
            <PromoBannerWrapperSubTitle>프론트엔드 2단계 과제 화이팅!🎉</PromoBannerWrapperSubTitle>
        </PromoBannerWrapper>
    )
}

export default PromoBanner;