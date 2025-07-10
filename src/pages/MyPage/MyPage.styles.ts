import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const UserInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.color.red500};
  color: #fff;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.red600};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.red700};
  }
`;
