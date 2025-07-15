import ErrorText from '@components/common/ErrorText';
import styled from '@emotion/styled';
import type { FormSectionProps } from '@pages/GiftOrderPage';

const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing5,
  padding: `0 ${theme.spacing.spacing7}`,
}));

const Label = styled.div(({ theme }) => ({
  ...theme.typography.label1Bold,
  marginBottom: theme.spacing.spacing3,
}));

const Input = styled.input(({ theme }) => ({
  width: '95%',
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

const SenderForm = ({ register, errors }: FormSectionProps) => {
  return (
    <Wrapper>
      <Label>보내는 사람</Label>
      <Input
        type="text"
        placeholder="이름을 입력하세요"
        {...register('sender')}
      />
      <Notice>* 실제 선물 발송 시 발신자 이름으로 발송됩니다.</Notice>
      {errors.sender && <ErrorText>{errors.sender.message}</ErrorText>}
    </Wrapper>
  );
};

export default SenderForm;
