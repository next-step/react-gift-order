import styled from '@emotion/styled';

export const TrendingGiftsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing[11]};
`;

export const TitleWarpper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  box-sizing: border-box;
  padding-top: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin-top: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const MoreInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
`;

export const MainTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const TabIconContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[200]};
  width: ${({ theme }) => theme.spacing[11]};
  height: ${({ theme }) => theme.spacing[11]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.gray[0] : theme.colors.blue[500])};
`;

export const TabLabel = styled.p<{ isSelected: boolean }>`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme, isSelected }) =>
    isSelected
      ? theme.typography.label.label1Bold.fontWeight
      : theme.typography.label.label1Regular.fontWeight};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
`;
