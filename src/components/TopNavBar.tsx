import styled from '@emotion/styled';
import BackArrow from '@/assets/chevron_left.svg?react';
import User from '@/assets/user.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import useUserInfo from '@/hooks/useUserInfo';

interface TopNavBarType {
  title: string;
  mainPath: string;
}

const Container = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 720px;
  height: 2.8rem;
  background-color: white;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  color: black;
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
`;

const svgSize = 30;

export const TopNavBar = ({ title, mainPath }: TopNavBarType) => {
  const url = useLocation();
  const navigate = useNavigate();
  const { user } = useUserInfo();

  return (
    <Container>
      <Btn
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackArrow width={svgSize} height={svgSize} fill="black" style={{ marginLeft: '10px' }} />
      </Btn>
      <Btn
        onClick={() => {
          if (url.pathname !== mainPath) {
            navigate(mainPath);
          } else {
            navigate(0);
          }
        }}
      >
        <Text>{title}</Text>
      </Btn>
      <Btn
        onClick={() => {
          if (!user.id) {
            navigate('/login');
          } else {
            navigate('/my');
          }
        }}
      >
        <User width={svgSize} height={svgSize} fill="black" style={{ marginRight: '10px' }} />
      </Btn>
    </Container>
  );
};
