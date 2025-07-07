import { css } from '@emotion/react';
import Logout from '@/components/Logout';
import MyInfo from '@/components/MyInfo';

const divStyle = css`
  padding: 0px 1rem;
`;

const MyPage = () => {
  return (
    <div css={divStyle}>
      <MyInfo />
      <Logout />
    </div>
  );
};

export default MyPage;
