import styled from '@emotion/styled';

const PromoWrapper = styled.div`
  background-color: ${(props) => props.theme.semanticColors.kakaoYellow};
  border-radius: 12px;
  padding: ${(props) => props.theme.spacing.spacing6}
    ${(props) => props.theme.spacing.spacing4};
  text-align: center;
  margin: ${(props) => props.theme.spacing.spacing6} 0;
`;

const PromoTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.subtitle1Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.subtitle1Bold.fontWeight};
  line-height: ${(props) => props.theme.typography.subtitle1Bold.lineHeight};
  color: ${(props) => props.theme.colors.gray900};
  margin: 0 0 ${(props) => props.theme.spacing.spacing2} 0;
  font-family: 'Pretendard', sans-serif;
`;

const PromoSubtitle = styled.p`
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Regular.fontWeight};
  line-height: ${(props) => props.theme.typography.body2Regular.lineHeight};
  color: ${(props) => props.theme.colors.gray900};
  margin: 0;
  font-family: 'Pretendard', sans-serif;
`;

interface PromoSectionProps {
  title: string;
  subtitle: string;
}

const PromoSection = ({ title, subtitle }: PromoSectionProps) => {
  return (
    <PromoWrapper>
      <PromoTitle>{title}</PromoTitle>
      <PromoSubtitle>{subtitle}</PromoSubtitle>
    </PromoWrapper>
  );
};

export default PromoSection;
