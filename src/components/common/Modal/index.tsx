import styled from '@emotion/styled';

export const Modal = styled.div(({ theme }) => ({
  background: theme.colors.scale.gray00,
  borderRadius: '8px',
  maxWidth: 'calc(720px - 3rem)',
  maxHeight: 'calc(100vh - 7.5rem)',
}));
