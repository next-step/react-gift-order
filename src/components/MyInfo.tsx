import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import { useUserInfo } from '@/contexts/AuthContext';

const spacer32 = css`
  height: ${theme.spacing.spacing8};
`;
const spacer8 = css`
  height: ${theme.spacing.spacing2};
`;
const spacer24 = css`
  height: ${theme.spacing.spacing6};
`;
const titleP = css`
  font-size: ${theme.typography.subtitle1Bold.fontSize};
  font-weight: ${theme.typography.subtitle1Bold.fontWeight};
  line-height: ${theme.typography.subtitle1Bold.lineHeight};
  color: ${theme.colors.textDefault};
  text-align: left;
`;
const contentP = css`
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  color: ${theme.colors.textDefault};
  text-align: left;
`;
const MyInfo = () => {
  const { user } = useUserInfo();
  return (
    <>
      <div css={spacer32} />
      <p css={titleP}>마이 페이지</p>
      <div css={spacer8} />
      <p css={contentP}>{user?.name}님 안녕하세요!</p>
      <p css={contentP}>이메일 주소는 {user?.email}입니다.</p>
      <div css={spacer24} />
    </>
  );
};

export default MyInfo;
