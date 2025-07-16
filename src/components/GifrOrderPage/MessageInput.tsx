import styled from '@emotion/styled';
import type { MultiOrderFormData } from '@schemas/orderSchema';
import type { UseFormRegister } from 'react-hook-form';

const TextArea = styled.textarea(({ theme }) => ({
  width: '100%',
  maxWidth: '660px',
  margin: '0 auto',
  height: theme.spacing.spacing10,
  padding: theme.spacing.spacing3,
  borderRadius: theme.spacing.spacing2,
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  ...theme.typography.body2Regular,
  outline: 'none',
}));

type Props = {
  register: UseFormRegister<MultiOrderFormData>;
};

const MessageInput = ({ register }: Props) => {
  return <TextArea {...register('message')} />;
};

export default MessageInput;
