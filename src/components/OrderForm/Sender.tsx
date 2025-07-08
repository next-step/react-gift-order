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
  height: 24px;
  background-color: transparent;
`;

const Text = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const Container = styled.div`
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

const Margin3 = styled.div`
  width: 100%;
  height: 4px;
  background-color: transparent;
`;

const InputBoxNotice = styled.p(({ theme }) => ({
  marginLeft: '0.5rem',
  fontSize: '0.75rem',
  fontWeight: '400',
  lineHeight: '1rem',
  color: theme.colorScale.gray600,
  margin: '0px',
  textAlign: 'left',
}));

export const Sender = () => {
  return (
    <Wrapper>
      <Margin1 />
      <Text>보내는 사람</Text>
      <Margin1 />
      <Container>
        <InputBox placeholder="이름을 입력하세요." />
        <Margin3 />
        <InputBoxNotice>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</InputBoxNotice>
      </Container>
      <Margin2 />
    </Wrapper>
  );
};
