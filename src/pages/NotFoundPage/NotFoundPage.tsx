import { useNavigate } from "react-router-dom";
import Layout from "@/layout";
import {
  NotFoundContainer,
  CharacterImage,
  MainMessage,
  SubMessage,
  HomeButton,
} from "./NotFoundPage.styles";
import { NOT_FOUND_LABELS } from "./constants/labels";
import ErrorImage from "./assets/error.png";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <Layout>
      <NotFoundContainer>
        <CharacterImage src={ErrorImage} alt="Error Character" />

        <MainMessage>{NOT_FOUND_LABELS.MAIN_MESSAGE}</MainMessage>
        <SubMessage>{NOT_FOUND_LABELS.SUB_MESSAGE}</SubMessage>

        <HomeButton onClick={handleGoHome}>
          {NOT_FOUND_LABELS.HOME_BUTTON}
        </HomeButton>
      </NotFoundContainer>
    </Layout>
  );
}

export default NotFoundPage;
