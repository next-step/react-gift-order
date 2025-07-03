import { useTheme } from "@emotion/react";
import { mockProduct } from "@/mocks/productData";
import { useSearchParams } from "react-router-dom";
import {
  gridStyle,
  itemStyle,
  rankStyle,
  imageStyle,
  nameStyle,
} from "./styles";

export default function RankingGrid() {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const genderFilter = searchParams.get("gender");
  const filteredProducts =
    genderFilter && genderFilter !== "전체"
      ? (
          mockProduct as Array<(typeof mockProduct)[0] & { gender?: string }>
        ).filter((item) => item.gender === genderFilter)
      : mockProduct;

  return (
    <div css={gridStyle(theme)}>
      {filteredProducts.map((item, index) => (
        <div key={item.id} css={itemStyle}>
          <div css={rankStyle(theme)}>{index + 1}</div>
          <img src={item.imageURL} alt={item.name} css={imageStyle} />
          <div css={nameStyle(theme)}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
