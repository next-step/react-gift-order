import styled from '@emotion/styled';

interface SectionTitleProps {
  title: string;
  marginBottom?: string;
}

const SectionTitle = ({ title, marginBottom = '16px' }: SectionTitleProps) => {
  return <TitleText marginBottom={marginBottom}>{title}</TitleText>;
};

export default SectionTitle;

const TitleText = styled.h2<{ marginBottom: string }>`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.color.text.default};
  margin: ${({ marginBottom }) => marginBottom};
`;