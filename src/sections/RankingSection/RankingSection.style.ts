import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing5};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textDefault};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;
