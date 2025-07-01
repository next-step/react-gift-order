import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const IconWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? theme.colors.blue700 : theme.colors.blue100};
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 8px;
`;

const Box = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.gray00};
  border: ${theme.colors.gray00};
  cursor: pointer;
`;

const Label = styled.div<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? theme.colors.blue700 : theme.colors.gray600};
  ${theme.typography.body2Regular};
  text-align: center;
`;

interface IconFilterItemProps {
  label: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export const IconFilterItem = ({
  label,
  icon,
  selected,
  onClick,
}: IconFilterItemProps) => {
  return (
    <Box onClick={onClick}>
      <IconWrapper selected={selected}>{icon}</IconWrapper>
      <Label selected={selected}>{label}</Label>
    </Box>
  );
};
