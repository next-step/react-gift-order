import { css } from '@emotion/react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    css={css`
      max-width: 720px;
      margin: 0 auto;
    `}
  >
    {children}
  </div>
);