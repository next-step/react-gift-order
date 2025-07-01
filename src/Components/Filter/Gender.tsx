import styled from '@emotion/styled';

const genderOptions = [
  { key: '전체', label: '전체', icon: 'ALL' }, 
  { key: '여성이', label: '여성이', icon: '👩🏻' }, 
  { key: '남성이', label: '남성이', icon: '👨🏻' },
  { key: '청소년이', label: '청소년이', icon: '👦🏻' },
];

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const FilterItem = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 60px;

  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  border: none;

  background-color: ${({ active, theme }) =>
    active ? theme.color.blue.blue700 : theme.color.blue.blue200};
    
  color: ${({ active, theme }) => (active ? theme.color.blue.blue00 : theme.color.blue.blue800)};

  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
`;

const Icon = styled.img<{ active: boolean }>`
  width: 30px;
  height: 30px;
`;

const Label = styled.div<{ active: boolean }>`
  margin-top: 6px;
  font-size: 13px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active, theme }) =>
    active ? theme.color.blue.blue700 : theme.color.gray.gray700};
  text-align: center;
`;

interface GenderProps {
  selectedGender: string;
  onChange: (value: string) => void;
}

const Gender = ({ selectedGender, onChange }: GenderProps) => {
  return (
    <ButtonGroup>
      {genderOptions.map(({ key, label, icon }) => {
        const isActive = selectedGender === key;
        const isEmoji = typeof icon === 'string';

        return (
          <div key={key} style={{ textAlign: 'center' }}>
            <FilterItem active={isActive} onClick={() => onChange(key)}>
              {icon === 'ALL' ? (
                <span style={{ fontSize: '14px', fontWeight: 700 }}>ALL</span>
              ) : isEmoji ? (
                <span>{icon}</span>
              ) : (
                <Icon src={icon as string} alt={label} active={isActive} />
              )}
            </FilterItem>
            <Label active={isActive}>{key}</Label>
          </div>
        );
      })}
    </ButtonGroup>
  );
};

export default Gender;
