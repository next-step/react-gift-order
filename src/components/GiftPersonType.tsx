import styled from "@emotion/styled";

type GiftPersonTypeProps = {
  icon: string;
  name: string;
  selected: boolean;
  onClick: () => void;
};

const GiftPersonType = ({
  icon,
  name,
  selected,
  onClick,
}: GiftPersonTypeProps) => {
  return (
    <Flex onClick={onClick}>
      <Icon selected={selected}>{icon}</Icon>
      <Name selected={selected}>{name}</Name>
    </Flex>
  );
};

export default GiftPersonType;

const Flex = styled.div`
  width: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  cursor: pointer;
`;
const Icon = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Bold.lineHeight};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.gray.gray00 : theme.colors.blue.blue400};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.blue.blue700 : theme.colors.blue.blue100};
  transition: background-color 200ms;
`;
const Name = styled.p<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme, selected }) =>
    selected
      ? theme.typography.label1Bold.fontWeight
      : theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blue.blue700 : theme.colors.gray.gray700};
  margin: ${({ theme }) => theme.spacing.spacing0};
`;
