import styled from '@emotion/styled';

type Props = {
  selected: string;
  onChange: (key: string) => void;
};

const CATEGORY_LIST = [
  { key: '전체', icon: 'ALL' },
  { key: '여성이', icon: '👩🏻' },
  { key: '남성이', icon: '👨🏻' },
  { key: '청소년이', icon: '👦🏻' },
] as const;

const RankingCategory = ({ selected, onChange }: Props) => {
  return (
    <CategoryWrapper>
      {CATEGORY_LIST.map(({ key, icon }) => (
        <CategoryItemWrapper key={key}>
          <CategoryItemButton isActive={selected === key} onClick={() => onChange(key)}>
            <CategoryIcon>{icon}</CategoryIcon>
          </CategoryItemButton>
          <CategoryText isActive={selected === key}>{key}</CategoryText>
        </CategoryItemWrapper>
      ))}
    </CategoryWrapper>
  );
};

export default RankingCategory;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 720px;
  border-radius: 16px;
  margin-top: ${({ theme }) => theme.spacing.spacing5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
  justify-content: space-between;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

const CategoryItemButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  gap: ${({ theme }) => theme.spacing.spacing1};
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: none;
  border-radius: 12px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue600 : theme.colors.blue200};
  color: ${({ isActive, theme }) => (isActive ? '#ffffff' : theme.colors.blue400)};
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
  &:focus {
    outline: none;
  }
`;

const CategoryIcon = styled.div`
  font-size: 1.25rem;
`;

const CategoryText = styled.span<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.font.body2Regular.size};
  font-weight: ${({ theme }) => theme.font.body2Regular.weight};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.blue600 : theme.colors.textDefault)};
`;
