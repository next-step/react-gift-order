import { useUserInfo } from "@/context/UserInfoProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardData } from "@/data/cardData";
import { useTheme } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { GiftCardThumb } from "@/components/GiftCardThumb";

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
    <div css={WrapperStyle(theme)}>
      <div css={CardWrapperStyle(theme)}>
        <div css={ThumbNailContainerStyle(theme)}>
          {cardData.map((card) => {
            return (
              <GiftCardThumb
                onClick={() => {
                  setSelectedId(card.id);
                }}
                css={ThumbNamilStyle(theme, card.id, selectedId)}
                src={card.thumbUrl}
              ></GiftCardThumb>
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
      <div css={MessageStyle(theme)}>
        <textarea defaultValue="축하해요."></textarea>
      </div>

      <div css={FormSectionWrapperStyle(theme)}>
        <p css={TextStyle(theme)}>보내는 사람</p>
        <div css={InputRowStyle(theme)}>
          <input placeholder="이름을 입력하세요."></input>
        </div>
        <p css={TinyTextStyle}>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </p>
      </div>

      <div css={FormSectionWrapperStyle(theme)}>
        <p css={TextStyle(theme)}>받는 사람</p>
        <div css={ReceiverFormStyle(theme)}>
          <div css={InputRowStyle(theme)}>
            <span>이름</span>
            <input placeholder="이름을 입력하세요."></input>
          </div>
          <div css={InputRowStyle(theme)}>
            <span>전화번호</span>
            <input placeholder="전화번호를 입력하세요."></input>
          </div>
          <div css={InputRowStyle(theme)}>
            <span>수량</span>
            <input defaultValue={1}></input>
          </div>
        </div>
      </div>
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
  border: ${selectedId === cardId ? "3px solid black" : "none"};
  border-radius: 4px;
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

const WrapperStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.spacing10};
`;

const MessageStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.spacing8};
  width: 100%;
`;

const FormSectionWrapperStyle = (theme: Theme) => css`
  width: 100%;
  padding: ${theme.spacing.spacing8}; // 안쪽 여백
  background-color:${theme.colors.gray.gray200}
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3}
`;

const ReceiverFormStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
`;

const InputRowStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.spacing10};
  

  span {
    width: 70px;
  }
  input {
    flex: 1;
    padding: ${theme.spacing.spacing8}
    border: 1px solid
    border-radius: 8px;
    height : 50px;
  }
`;

const TextStyle = (theme: Theme) => css`
  font-size: ${theme.typography.subtitle1Bold.size};
  font-weight: ${theme.typography.subtitle1Bold.weight};
  line-height: ${theme.typography.subtitle1Bold.lineHeight};
`;

const TinyTextStyle = () => css`
  font-size: 12px;
  color: #888888;
  margin-top: 4px;
`;
