import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { IoArrowBackOutline, IoPersonOutline } from "react-icons/io5";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";

const NavigationBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div css={navigationBarStyles(theme)}>
      <button
        onClick={() => {
          if (window.history.length) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        css={iconButtonStyles(theme)}
        aria-label="뒤로가기">
        <IoArrowBackOutline />
      </button>

      <h1 css={titleStyles(theme)}>선물하기</h1>

      <button
        onClick={() => {
          navigate("/login");
        }}
        css={iconButtonStyles(theme)}
        aria-label="프로필">
        <IoPersonOutline />
      </button>
    </div>
  );
};

const navigationBarStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
  background: ${theme.colors.semantic.background.default};
  border-bottom: 1px solid ${theme.colors.semantic.border.default};
`;

const titleStyles = (theme: Theme) => css`
  margin: 0;
  font-size: ${theme.typography.title2Bold.size};
  font-weight: ${theme.typography.title2Bold.weight};
  color: ${theme.colors.semantic.text.default};
`;

const iconButtonStyles = (theme: Theme) => css`
  all: unset;
  font-size: 1.5rem;
  display: flex;
  color: ${theme.colors.semantic.text.default};
  cursor: pointer;
`;

export default NavigationBar;
