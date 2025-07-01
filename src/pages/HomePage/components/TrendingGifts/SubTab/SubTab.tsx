import styled from "@emotion/styled";
import { TRENDING_GIFTS_SUB_TABS } from "../constants/labels";

const SubTabContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

const SubTabButton = styled.button<{ isSelected: boolean }>`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[500]};
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme, isSelected }) =>
    isSelected
      ? theme.typography.label.label1Bold.fontWeight
      : theme.typography.label.label1Regular.fontWeight};
`;

interface SubTabPropsType {
  subTabIdx: number;
  onClick: (idx: number) => void;
}

function SubTab({ subTabIdx, onClick }: SubTabPropsType) {
  return (
    <SubTabContainer>
      {TRENDING_GIFTS_SUB_TABS.map((el, idx) => (
        <SubTabButton
          key={idx}
          isSelected={idx === subTabIdx}
          onClick={() => onClick(idx)}
        >
          {el}
        </SubTabButton>
      ))}
    </SubTabContainer>
  );
}

export default SubTab;
