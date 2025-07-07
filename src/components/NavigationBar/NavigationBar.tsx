import BackIconSvg from "./icons/back.svg";
import ProfileIconSvg from "./icons/profile.svg";
import {
  UnstyledButton,
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
      <UnstyledButton onClick={() => navigate(-1)}>
        <Icon
          src={BackIconSvg}
          alt={NAVIGATION_BAR_LABELS.BACK_BUTTON_ALT}
          size="24px"
        />
      </UnstyledButton>
      <UnstyledButton onClick={() => navigate(ROUTES.HOME)}>
        <SectionTitle>{NAVIGATION_BAR_LABELS.SECTION_TITLE}</SectionTitle>
      </UnstyledButton>
      <UnstyledButton onClick={handleProfileClick}>
        <Icon
          src={ProfileIconSvg}
          alt={NAVIGATION_BAR_LABELS.PROFILE_BUTTON_ALT}
          size="20px"
        />
      </UnstyledButton>
    </NavigationSection>
  );
}

export default NavigationBar;
