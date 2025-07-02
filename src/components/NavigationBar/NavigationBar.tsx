import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { RouterPath } from "@/routes/path";
import {
  NavBar,
  IconButton,
  Title,
} from "@/components/NavigationBar/NavigationBar.style";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoLogin = () => {
    navigate(RouterPath.LOGIN);
  };

  return (
    <NavBar>
      <IconButton type="button" onClick={handleGoBack}>
        <FiChevronLeft size={30} />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton type="button" onClick={handleGoLogin}>
        <GoPerson size={30} />
      </IconButton>
    </NavBar>
  );
}
