import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
        /* 박스크기계산 방식 통일: padding 과 border 포함해서 계산 */

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        /* 마진, 패딩 제거 */
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        li,
        figure,
        blockquote,
        dl,
        dd {
          margin: 0;
          padding: 0;
        }
        /* 리스트 스타일 제거 */
        ul,
        ol {
          list-style: none;
        }
button{
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;


}


        /* 폰트 적용 */
        * {
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
        }
      `}
    />
  );
};

export default GlobalStyles;
