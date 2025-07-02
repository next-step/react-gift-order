import styled from "@emotion/styled";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.gray200};
  padding: ${({ theme }) => theme.spacing.spacing5};
`;
export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray00};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing5};
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 20px;
`;
export const PlusButton = styled.button`
  background: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  cursor: pointer;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textDefault};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
`;
