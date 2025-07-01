import styled from "@emotion/styled";

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.color.semantic.backgroundFill};
`;

const FriendButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.semantic.backgroundDefault};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.spacing4};
  gap: ${({ theme }) => theme.spacing.spacing2};
  border: none;
  cursor: pointer;
`;

const Icon = styled.span`
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  width: 40px;
  height: 40px;
  border-radius: 15px;
  font-size: 35px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.semantic.textDefault};
  text-align: center;
  vertical-align: middle;
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.body.body1Bold};
  color: ${({ theme }) => theme.color.semantic.textDefault};
  margin: 0;
`;

export default function FriendSelectBanner() {
    return (
        <Wrapper>
            <FriendButton>
                <Icon>+</Icon>
                <Text>선물할 친구를 선택해 주세요.</Text>
            </FriendButton>
        </Wrapper>
    );
}
