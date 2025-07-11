import styled from '@emotion/styled';

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
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const MessageInput = ({ value, onChange }: Props) => {
  return <TextArea value={value} onChange={onChange} />;
};

export default MessageInput;
