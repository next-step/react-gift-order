/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const EmptyReceiverBox = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        border: 1px solid ${theme.color.gray.gray400};
        border-radius: 8px;
        padding: 40px 0;
        text-align: center;
        color: ${theme.color.gray.gray600};
        font-size: 14px;
      `}
    >
      받는 사람이 없습니다.  
      <br />
      받는 사람을 추가해주세요.
    </div>
  );
};

export default EmptyReceiverBox;
