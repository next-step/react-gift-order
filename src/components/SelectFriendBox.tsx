import styled from "@emotion/styled";
import Plus from "@/components/UI/Plus";

const SelectFriendBox = () => {
  return (
    <Box>
      <PlusDiv>
        <Plus size="24px" />
      </PlusDiv>
      <SelectText>선물할 친구를 선택해 주세요.</SelectText>
    </Box>
  );
};

export default SelectFriendBox;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) =>
    `${theme.spacing.spacing4} ${theme.spacing.spacing3}`};
  padding: ${({ theme }) => theme.spacing.spacing4};
  gap: ${({ theme }) => theme.spacing.spacing3};
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  cursor: pointer;
`;

const PlusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
`;

const SelectText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;
