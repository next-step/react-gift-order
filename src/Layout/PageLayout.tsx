import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: ${({ theme }) => theme.spacing.spacing11};
`;

const PageLayout = () => {
  return (
    <>
      <NavigationBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default PageLayout;
