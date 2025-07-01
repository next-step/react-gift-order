import styled from "@emotion/styled";
import SubTab from "../SubTab/SubTab";

const TabContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface TabContentWrapperPropsType {
  subTabIdx: number;
  onClick: (idx: number) => void;
  children: React.ReactNode;
}

function TabContentWrapper({
  subTabIdx,
  onClick,
  children,
}: TabContentWrapperPropsType) {
  return (
    <TabContentContainer>
      <SubTab subTabIdx={subTabIdx} onClick={onClick} />
      {children}
    </TabContentContainer>
  );
}

export default TabContentWrapper;
