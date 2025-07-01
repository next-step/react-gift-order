import styled from '@emotion/styled';
import { AppFrame } from './App.styles';
import NavigationBar from './components/NavigationBar/NavigationBar';

const LayoutContent = styled.div`
  margin-top: ${({ theme }) => theme.components.navigationBar.height};
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppFrame>
      <NavigationBar />
      <LayoutContent>{children}</LayoutContent>
    </AppFrame>
  );
}

export default Layout;
