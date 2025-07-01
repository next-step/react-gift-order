import styled from '@emotion/styled';
import Text from '@/common/Text';

const NotFound = () => {
  return (
    <Layout>
      <Text size="subtitle1" weight="regular">
        요청하신 페이지를 찾을 수 없습니다.
      </Text>
    </Layout>
  );
};

export default NotFound;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
