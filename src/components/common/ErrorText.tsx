import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const StyledError = styled.p(({ theme }) => ({
  color: theme.colors.semantic.critical,
  fontSize: theme.typography.label1Regular.fontSize,
  marginBottom: theme.spacing.spacing3,
  width: '100%',
  maxWidth: '320px',
  textAlign: 'left',
}));

const ErrorText = ({ children }: Props) => {
  return <StyledError>{children}</StyledError>;
};

export default ErrorText;
