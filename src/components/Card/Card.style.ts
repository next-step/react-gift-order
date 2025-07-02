import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 210px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

export const RankNumber = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing2};
  left: ${({ theme }) => theme.spacing.spacing2};
  background: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.gray00};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  padding: 2px 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px 12px 12px 12px;
  text-align: left;
`;

export const Brand = styled.div`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.typography.body2Bold.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.gray1000};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.colors.gray1000};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
