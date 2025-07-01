import styled from '@emotion/styled';
import { IoIosArrowBack } from 'react-icons/io';
import { LuUserRound } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import Text from '@/common/Text';

const NavigationBar = () => {
  const navigate = useNavigate();

  const navigataBack = () => {
    navigate(-1);
  };

  const navigataLogin = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <IoIosArrowBack size={25} onClick={navigataBack} />
      <Text size="title1" weight="bold">
        선물하기
      </Text>
      <LuUserRound size={25} onClick={navigataLogin} />
    </Layout>
  );
};

export default NavigationBar;
const Layout = styled.div`
  box-sizing: border-box;
  position: fixed;
  padding: 0 8px 0 8px;
  top: 0;
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray00};
`;
