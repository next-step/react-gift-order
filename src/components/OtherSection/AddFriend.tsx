/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export default function AddFriend() {
  return (
    <Wrapper>
      <Card>
        <AddButton>+</AddButton>
        <Text>선물할 친구를 선택해 주세요</Text>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 12px 12px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.default};
  border-radius: 20px;
  padding: 12px 16px;
  display: flex;
  height: 55px;
  align-items: center;
`;

const AddButton = styled.button`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray1000};
  background: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 13px;
  margin-right: 12px;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.textDefault};
  flex: 1;
`;
