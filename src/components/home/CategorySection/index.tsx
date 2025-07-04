import { useTheme } from "@emotion/react";
import { categoryData } from "@/mocks/categoryData";
import {
  titleStyle,
  gridStyle,
  itemStyle,
  imageStyle,
  nameStyle,
} from "./styles";
import { whiteSectionStyle } from "@/styles/CommonStyles";

export default function CategorySection() {
  const theme = useTheme();

  return (
    <div css={whiteSectionStyle(theme)}>
      <h2 css={titleStyle(theme)}>선물 테마</h2>
      <div css={gridStyle}>
        {categoryData.map((item) => (
          <div key={item.themeId} css={itemStyle}>
            <img src={item.image} alt={item.name} css={imageStyle} />
            <span css={nameStyle(theme)}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
