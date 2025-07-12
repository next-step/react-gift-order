import styled from '@emotion/styled';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing5,
  padding: `0 ${theme.spacing.spacing7}`,
}));

const Label = styled.div(({ theme }) => ({
  ...theme.typography.label1Bold,
  marginBottom: theme.spacing.spacing3,
}));

const Input = styled.input(({ theme }) => ({
  width: '100%',
  padding: theme.spacing.spacing3,
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  borderRadius: theme.spacing.spacing2,

  outline: 'none',
  '&:focus': {
    borderColor: theme.colors.semantic.textDefault,
  },
}));

const Notice = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing1,
  ...theme.typography.subtitle2Regular,
  color: theme.colors.semantic.textSub,
}));

const SenderForm = ({ value, onChange }: Props) => {
  return (
    <Wrapper>
      <Label>보내는 사람</Label>
      <Input
        type="text"
        placeholder="이름을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Notice>* 실제 선물 발송 시 발신자 이름으로 발송됩니다.</Notice>
    </Wrapper>
  );
};

export default SenderForm;
