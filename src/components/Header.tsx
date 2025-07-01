import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";
import { FiChevronLeft, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const headerWrapper = (theme: Theme) => css`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  background-color: ${theme.colors.semantic.backgroundDefault};
  border-bottom: 1px solid ${theme.colors.semantic.borderDefault};
`;

const titleStyle = (theme: Theme) => css`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.semantic.textDefault};
`;

const backButtonStyle = css`
  background: none;
  border: none;
  padding: 0;
`;

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <header css={headerWrapper(theme)}>
      <button onClick={handleBack} css={backButtonStyle}>
        <FiChevronLeft size={24} />
      </button>
      <h1 css={titleStyle(theme)}>선물하기</h1>
      <button onClick={() => navigate("/login")}>
        <FiUser size={24} />
      </button>
    </header>
  );
}
