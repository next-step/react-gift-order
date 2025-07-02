import React from 'react';
import styled from '@emotion/styled';

interface ErrorMessageProps {
  message?: string | null;
  visible?: boolean;
}

const StyledErrorMessage = styled.div`
  color: ${(props) => props.theme.semanticColors.state.critical};
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Regular.fontWeight};
  margin-top: ${(props) => props.theme.spacing.spacing1};
  min-height: 18px;
  line-height: 1.3;
`;

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  visible = !!message,
}) => {
  return (
    <StyledErrorMessage>{visible && message ? message : ''}</StyledErrorMessage>
  );
};

export default ErrorMessage;
