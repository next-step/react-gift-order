import styled from "@emotion/styled";
import ThemeButton from "@src/components/shared/ThemeButton";
import { themeMockData } from "@src/mock/themeMockData";

function GiftThemePanel() {
  return (
    <GiftThemePanelWrapper>
      <TitleP>선물 테마</TitleP>
      <ThemePlaceholder>
        {themeMockData.map((theme) => {
          return (
            <ThemeButton
              key={theme.themeId}
              image={theme.image}
              caption={theme.name}
            />
          );
        })}
      </ThemePlaceholder>
    </GiftThemePanelWrapper>
  );
}

const TitleP = styled.p`
  width: 95%;
  font-size: 20px;
  font-weight: bold;
`;

const ThemePlaceholder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const GiftThemePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
`;

export default GiftThemePanel;
