import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Layout;
