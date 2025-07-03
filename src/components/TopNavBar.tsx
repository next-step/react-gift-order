import styled from '@emotion/styled';
import BackArrow from '@/assets/chevron_left.svg?react';
import User from '@/assets/user.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';

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

export const TopNavBar = ({ title, mainPath }: TopNavBarType) => {
  const svgSize = 30;
  const url = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Btn
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackArrow width={svgSize} height={svgSize} fill="black" style={{ marginLeft: '10px' }} />
      </Btn>
      <Btn>
        <Text
          onClick={() => {
            if (url.pathname !== mainPath) {
              navigate(mainPath);
            } else {
              navigate(0);
            }
          }}
        >
          {title}
        </Text>
      </Btn>
      <Btn
        onClick={() => {
          if (url.pathname !== '/login') {
            navigate('/login');
          } else {
            navigate(0);
          }
        }}
      >
        <User width={svgSize} height={svgSize} fill="black" style={{ marginRight: '10px' }} />
      </Btn>
    </Container>
  );
};
