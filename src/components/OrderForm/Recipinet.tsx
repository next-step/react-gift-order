import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Margin1 = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`;

const Margin2 = styled.div`
  width: 100%;
  height: 8px;
  background-color: transparent;
`;

const Margin3 = styled.div`
  width: 100%;
  height: 24px;
  background-color: transparent;
`;

const Title = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const InputBoxContainer = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const InputBoxTitle = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
  minWidth: '3.75rem',
}));

const InputBoxStyle = styled.div`
  width: 100%;
`;

const InputBox = styled.input(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  color: theme.semanticColors.text.default,
  transition: 'border-color 200ms',
  borderStyle: 'solid',
  minHeight: '2.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  padding: '8px 12px',
  borderWidth: '1px',
  borderRadius: '8px',
  borderColor: theme.semanticColors.border.disabled,
  '&:focus': {
    outline: 'none',
    borderColor: theme.colorScale.gray700,
  },
  '&::placeholder': {
    color: theme.semanticColors.text.placeholder,
  },
}));

export const Recipinet = () => {
  return (
    <Wrapper>
      <Margin1 />
      <Title>받는 사람</Title>
      <Margin1 />
      <InputBoxContainer>
        <InputBoxTitle>이름</InputBoxTitle>
        <InputBoxStyle>
          <InputBox placeholder="이름을 입력하세요." />
        </InputBoxStyle>
      </InputBoxContainer>
      <Margin2 />
      <InputBoxContainer>
        <InputBoxTitle>전화번호</InputBoxTitle>
        <InputBoxStyle>
          <InputBox placeholder="전화번호를 입력하세요." />
        </InputBoxStyle>
      </InputBoxContainer>
      <Margin2 />
      <InputBoxContainer>
        <InputBoxTitle>수량</InputBoxTitle>
        <InputBoxStyle>
          <InputBox placeholder="수량을 입력하세요." type="number" value="1" />
        </InputBoxStyle>
      </InputBoxContainer>
      <Margin3 />
    </Wrapper>
  );
};
