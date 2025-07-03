import { FiChevronLeft, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { headerWrapper, titleStyle, backButtonStyle } from "./styles";

export default function Header() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <header css={headerWrapper()}>
      <button onClick={handleBack} css={backButtonStyle}>
        <FiChevronLeft size={24} />
      </button>
      <h1 css={titleStyle()}>선물하기</h1>
      <button onClick={() => navigate("/login")}>
        <FiUser size={24} />
      </button>
    </header>
  );
}
