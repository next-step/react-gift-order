import { ButtonGroup, FilterItem, Label } from '@/components/filter/Gender.style';

const genderOptions = [
  { key: '전체', label: '전체', icon: 'ALL' },
  { key: '여성이', label: '여성이', icon: '👩🏻' },
  { key: '남성이', label: '남성이', icon: '👨🏻' },
  { key: '청소년이', label: '청소년이', icon: '👦🏻' },
];

interface GenderProps {
  selectedGender: string;
  onChange: (value: string) => void;
}

const Gender = ({ selectedGender, onChange }: GenderProps) => {
  return (
    <ButtonGroup>
      {genderOptions.map(({ key, icon }) => {
        const isActive = selectedGender === key;

        return (
          <div key={key} style={{ textAlign: 'center' }}>
            <FilterItem active={isActive} onClick={() => onChange(key)}>
              {icon === 'ALL' ? (
                <span style={{ fontSize: '14px', fontWeight: 700 }}>ALL</span>
              ) : (
                <span>{icon}</span>
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
