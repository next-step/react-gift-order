import { css } from "@emotion/react";

const layoutStyle = css`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return <div css={layoutStyle}>{props.children}</div>;
};

export default Layout;
