import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/theme';

const TextBox = styled.section`
  padding: 0px 16px;
`;

const TextContainer = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.semanticColors.brand.kakaoYellow};
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const SubText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(134, 139, 148);
  margin: 0px;
  text-align: left;
`;

const MainText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
const Fighting = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextBox>
        <TextContainer>
          <SubText>카카오테크 캠퍼스 3기여러분</SubText>
          <MainText>프론트엔드 2단계 과제 화이팅! 🎉</MainText>
        </TextContainer>
      </TextBox>
    </ThemeProvider>
  );
};

export default Fighting;
