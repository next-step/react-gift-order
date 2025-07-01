import styled from '@emotion/styled';

const StyledButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  color: ${({ active }) => (active ? '#3182f6' : '#5a5a5a')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 15px;

  margin: auto;

  .icon {
    background: ${({ active }) => (active ? '#3182f6' : '#e0e6ff')};
    color: ${({ active }) => (active ? '#fff' : '#3182f6')};
    border-radius: 15px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  outline: none;
  box-shadow: none;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

interface FilterButtonProps {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <StyledButton active={active} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default FilterButton;
