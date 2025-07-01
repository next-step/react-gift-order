import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

const containerStyle = css`
  text-align: center;
  margin-top: 5rem;
`;

const buttonStyle = css`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
`;

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div css={containerStyle}>
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <button css={buttonStyle} onClick={() => navigate("/")}>
        홈으로 돌아가기
      </button>
    </div>
  );
}
