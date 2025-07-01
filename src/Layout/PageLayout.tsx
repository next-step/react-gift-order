import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const PageLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default PageLayout;
