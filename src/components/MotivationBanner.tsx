import styled from '@emotion/styled'

const BannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.spacing4};
`

const SmallText = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.text.sub};
`

const StrongText = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.text.default};
`

export const MotivationBanner = () => {
  return (
    <BannerWrapper>
      <SmallText>카카오테크 캠퍼스 3기여러분</SmallText>
      <StrongText>프론트엔드 2단계 과제 화이팅! 🎉</StrongText>
    </BannerWrapper>
  )
}