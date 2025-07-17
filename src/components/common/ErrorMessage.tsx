import styled from '@emotion/styled';

export const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.semanticColors.state.critical,
  fontSize: '0.75rem',
  marginTop: '4px',
  display: 'block',
  marginLeft: '0.5rem',
}));
