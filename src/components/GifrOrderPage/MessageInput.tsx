import styled from '@emotion/styled';
import { useState } from 'react';

const TextArea = styled.textarea(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing10,
  padding: theme.spacing.spacing3,
  borderRadius: theme.spacing.spacing2,
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  ...theme.typography.body2Regular,
  outline: 'none',
}));

const MessageInput = () => {
  const [message, setMessage] = useState('축하합니다.');
  return (
    <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
  );
};

export default MessageInput;
