import styled from '@emotion/styled';

export const GiftBannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: ${({ theme }) => theme.layout.width.container};
  width: 100%;
  height: 7rem;
  margin-top: ${({ theme }) => theme.components.navigationBar.height};

  background-color: ${({ theme }) => theme.colors.background.disabled};
`;

export const BannerCard = styled.button`
  display: flex;
  align-items: center;
  width: 95%;
  padding: ${({ theme }) => theme.spacing[4]};

  cursor: pointer;
  border: 0;

  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const AddIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  margin-right: ${({ theme }) => theme.spacing[3]};

  cursor: pointer;
  border: 0;

  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const AddIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const BannerMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
`;
