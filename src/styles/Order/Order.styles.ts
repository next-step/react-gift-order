import styled from '@emotion/styled';

export const OrderContainer = styled.form`
  display: flex;
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: left;
  background-color: ${({ theme }) => `${theme.colors.gray300}`};
  padding-top: 45px;
  padding-bottom: 50px;
`;
