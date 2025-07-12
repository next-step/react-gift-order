import styled from '@emotion/styled';

const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing5,
  padding: `0 ${theme.spacing.spacing7}`,
}));

const SectionTitle = styled.div(({ theme }) => ({
  ...theme.typography.label1Bold,
  marginBottom: theme.spacing.spacing3,
}));

const Label = styled.label(({ theme }) => ({
  ...theme.typography.label1Regular,
  color: theme.colors.semantic.textDefault,
  marginLeft: theme.spacing.spacing3,
  width: '5rem',
}));

const Input = styled.input(({ theme }) => ({
  flex: '1',
  width: '100%',
  padding: theme.spacing.spacing3,
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  borderRadius: theme.spacing.spacing2,

  outline: 'none',
  '&:focus': {
    borderColor: theme.colors.semantic.textDefault,
  },
}));

const FieldRow = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing.spacing3,
}));

const ReceiveForm = () => {
  return (
    <Wrapper>
      <SectionTitle>받는사람</SectionTitle>
      <FieldRow>
        <Label htmlFor="receiverName">이름</Label>
        <Input id="receiverName" placeholder="이름을 입력하세요." />
      </FieldRow>

      <FieldRow>
        <Label htmlFor="receiverPhone">전환번호</Label>
        <Input id="receiverPhone" placeholder="전화번호를 입력하세요." />
      </FieldRow>

      <FieldRow>
        <Label htmlFor="quantity">수량</Label>
        <Input id="quantity" type="number" defaultValue={1} />
      </FieldRow>
    </Wrapper>
  );
};

export default ReceiveForm;
