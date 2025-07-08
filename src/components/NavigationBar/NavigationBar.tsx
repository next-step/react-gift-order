import BackIconSvg from "./icons/back.svg";
import ProfileIconSvg from "./icons/profile.svg";
import {
  Button,
  NavigationSection,
  SectionTitle,
  Icon,
} from "./NavigationBar.styles";
import { NAVIGATION_BAR_LABELS } from "./constants/labels";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    navigate(ROUTES.MY, {
      state: { from: location.pathname },
    });
  };

  return (
    <NavigationSection>
      <Button onClick={() => navigate(-1)}>
        <Icon
          src={BackIconSvg}
          alt={NAVIGATION_BAR_LABELS.BACK_BUTTON_ALT}
          size="24px"
        />
      </Button>
      <Button onClick={() => navigate(ROUTES.HOME)}>
        <SectionTitle>{NAVIGATION_BAR_LABELS.SECTION_TITLE}</SectionTitle>
      </Button>
      <Button onClick={handleProfileClick}>
        <Icon
          src={ProfileIconSvg}
          alt={NAVIGATION_BAR_LABELS.PROFILE_BUTTON_ALT}
          size="20px"
        />
      </Button>
    </NavigationSection>
  );
}

export default NavigationBar;
