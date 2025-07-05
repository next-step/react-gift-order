import { useUserInfo } from "@/context/UserInfoProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardData } from "@/data/cardData";
import { useTheme } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

const Order: React.FC = () => {
  const { setUser } = useUserInfo();
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    setUser({ email, password });
    if (!email || !password) {
      navigate("/login");
    }
  }, []);

  return (
    <div css={thumbNailContainerStyle(theme)}>
      {cardData.map((card) => {
        return (
          <img
            key={card.id}
            onClick={() => setSelectedId(card.id)}
            css={thumbNamilStyle(theme, card.id, selectedId)}
            src={card.thumbUrl}
          ></img>
        );
      })}
    </div>
  );
};

export default Order;

const thumbNamilStyle = (
  theme: Theme,
  cardId: number,
  selectedId: number | undefined
) => css`
  padding: ${theme.spacing.spacing0};
  border: ${selectedId === cardId ? "3px solid" : "none"};
`;

const thumbNailContainerStyle = (theme: Theme) => css`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: ${theme.spacing.spacing5};
`;
