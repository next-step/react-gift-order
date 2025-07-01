import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/theme';
import PlusIcon from '@/assets/PlusIcon';

const Container = styled.section`
  width: 100%;
  padding: 16px 12px;
  background-color: ${(props) => props.theme.semanticColors.background.fill};
`;

const SelectionButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.semanticColors.background.default};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  cursor: pointer;
`;

const PlusIconBox = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.semanticColors.brand.kakaoYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ButtonIntroduction = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  color: ${(props) => props.theme.colorScale.gray900};
  margin: 0px;
  width: 100%;
  text-align: left;
`;

const ReceiverSelection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SelectionButton>
          <PlusIconBox>
            <PlusIcon />
          </PlusIconBox>
          <ButtonIntroduction>선물할 친구를 선택해 주세요.</ButtonIntroduction>
        </SelectionButton>
      </Container>
    </ThemeProvider>
  );
};

export default ReceiverSelection;
