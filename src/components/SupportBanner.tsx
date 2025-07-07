import styled from '@emotion/styled';
import { colors, fontSizes, spaces, } from '@/tokens/designTokens';

const Wrap = styled.section`
  background: ${colors.accent};
  padding: ${spaces.lg} ${spaces.md};
  text-align: center;
`;

const Message = styled.h2`
  margin: 0;
  font-size: ${fontSizes.h2};
  color: ${colors.primary};
  font-weight: 600;
`;

const SubMessage = styled.p`
  margin: ${spaces.sm} 0 0;
  font-size: ${fontSizes.body};
  color: ${colors.text};
`;

export default function SupportBanner() {
  return (
    <Wrap>
      <Message>카테캠 3기 여러분!</Message>
      <SubMessage>프론트엔드 2단계 과제 화이팅! 🎉</SubMessage>
    </Wrap>
  );
}
