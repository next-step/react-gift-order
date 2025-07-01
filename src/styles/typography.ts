import { css } from "@emotion/react";

export const GlobalTypographyStyle = css`
  html {
    font-family:
      "Pretendard Variable",
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      sans-serif;
    line-height: 1.5;
    font-size: 16px;
  }
  input,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
`;
