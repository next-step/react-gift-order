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
    <div css={CardWrapperStyle(theme)}>
      <div css={ThumbNailContainerStyle(theme)}>
        {cardData.map((card) => {
          return (
            <>
              <img
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                css={ThumbNamilStyle(theme, card.id, selectedId)}
                src={card.thumbUrl}
              ></img>
            </>
          );
        })}
      </div>
      <img
        src={
          selectedId === undefined
            ? cardData[0].imageUrl
            : cardData.find((card) => card.id === selectedId)?.imageUrl
        }
      ></img>
    </div>
  );
};

export default Order;

const ThumbNamilStyle = (
  theme: Theme,
  cardId: number,
  selectedId: number | undefined
) => css`
  padding: ${theme.spacing.spacing0};
  border: ${selectedId === cardId ? "3px solid" : "none"};
  border-radius:;
`;

const ThumbNailContainerStyle = (theme: Theme) => css`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  gap: ${theme.spacing.spacing5};
`;

const CardWrapperStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.spacing10};
`;
