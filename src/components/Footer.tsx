import styled from '@emotion/styled';
import { spaces, fontSizes, colors } from '@/tokens/designTokens';

const Wrap = styled.footer`
  padding: ${spaces.md};
  text-align: center;
  font-size: ${fontSizes.body};
  color: ${colors.footer};
`;

export default function Footer() {
  return (
    <Wrap>© 2025 Kakao Corp. All rights reserved.</Wrap>
  );
}
