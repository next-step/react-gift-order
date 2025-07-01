import Text from '@/common/Text';
import styled from '@emotion/styled';

const LoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Content onClick={onClick}>
      <Text size="label1" weight="regular">
        로그인
      </Text>
    </Content>
  );
};

export default LoginButton;

const Content = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  width: 388px;
  height: 44px;
`;
