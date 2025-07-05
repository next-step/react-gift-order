import React from 'react';
import styled from '@emotion/styled';

interface InputWithErrorProps {
  children: React.ReactNode;
  error?: string;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 13px;
  margin-top: 4px;
`;

const InputWithError: React.FC<InputWithErrorProps> = ({
  children,
  error,
  className,
}) => (
  <Wrapper className={className}>
    {children}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Wrapper>
);

export default InputWithError;
