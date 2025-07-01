import styled from '@emotion/styled';
import { colors, fontSizes, spaces, } from '@/tokens/designTokens';

const HeroWrap = styled.section`
  background: ${colors.accent};
  padding: ${spaces.lg} ${spaces.md};
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${fontSizes.h2};
  color: ${colors.primary};
  margin-bottom: ${spaces.md};
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const PlusButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #8b4513; /* 갈색 */
  color: #ffffff;      /* 흰색 + */
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Hero() {
  return (
    <HeroWrap>
      <Title>선물할 친구를 선택해 주세요.</Title>
      <SearchBox>
        <PlusButton>＋</PlusButton>
      </SearchBox>
    </HeroWrap>
  );
}
