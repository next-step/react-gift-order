import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundFill};
`;

export const Image = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

export const Title = styled.h2`
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.semantic.textSub};
  font: ${({ theme }) => theme.typography.body2Regular};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  font: ${({ theme }) => theme.typography.body2Bold};
  cursor: pointer;
`;
