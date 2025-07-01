import styled from '@emotion/styled';

interface Option {
  label: string;
  value: string;
}

interface SegmentedControlProps {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const SegmentedControl = ({
  options,
  selectedValue,
  onSelect,
}: SegmentedControlProps) => {
  return (
    <Wrapper>
      {options.map(({ label, value }) => (
        <Button
          key={value}
          isActive={selectedValue === value}
          onClick={() => onSelect(value)}
        >
          {label}
        </Button>
      ))}
    </Wrapper>
  );
};

export default SegmentedControl;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: ${({ theme }) => theme.color.blue[100]};
  border-radius: 0.5rem;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Button = styled.button<{ isActive: boolean }>`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, isActive }) =>
    isActive
      ? theme.typography.subtitle.subtitle2Bold
      : theme.typography.subtitle.subtitle2Regular};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.blue[600] : theme.color.blue[400]};
  background-color: ${({ theme }) => theme.color.blue[100]};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 200ms;
`;
