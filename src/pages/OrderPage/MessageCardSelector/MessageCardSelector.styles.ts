import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  padding: 1rem 0;
  margin-bottom: 12px;
`;

export const Card = styled.div<{ isSelected: boolean }>`
  flex: 0 0 auto;
  width: 90px;
  height: 60px;
  border-radius: 12px;
  cursor: pointer;
  border: 3px solid ${({ isSelected, theme }) => (isSelected ? theme.color.gray800 : 'transparent')};
  box-shadow: ${({ isSelected }) => (isSelected ? '0 0 7px rgba(125, 125, 125, 0.5)' : 'none')};
  transition:
    border 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.gray600};
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;
