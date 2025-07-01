import styled from "@emotion/styled";
import { FiPlus } from "react-icons/fi";

export const FriendBanner = () => {
  return (
    <OuterWrapper>
      <InnerBox>
        <IconBox>
          <FiPlus size={20} />
        </IconBox>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </InnerBox>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.colorScale.gray.gray100};
  padding: 12px 16px;
`;

const InnerBox = styled.div`
  background-color: ${({ theme }) => theme.colors.colorScale.gray.gray00};
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.kakao.yellow};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  svg {
    color: ${({ theme }) => theme.colors.colorScale.gray.gray1000};
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
`;
