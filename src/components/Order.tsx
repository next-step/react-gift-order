import { useEffect, useState } from "react";
import { cardData } from "@/data/cardData";
import { useTheme } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { GiftCardThumb } from "@/components/GiftCardThumb";
import { useParams } from "react-router-dom";
import { giftData } from "@/data/giftData";

const Order: React.FC = () => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<number>();
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const selectedGiftId = id ? parseInt(id, 10) : undefined;
  const selectedGift = giftData.find((gift) => gift.id === selectedGiftId);

  useEffect(() => {
    const price = Number(selectedGift?.price.sellingPrice || 0);
    setTotalPrice(quantity * price);
  }, [quantity]);

  return (
    <div css={WrapperStyle(theme)}>
      <div css={CardWrapperStyle(theme)}>
        <div css={ThumbNailContainerStyle(theme)}>
          {cardData.map((card) => {
            return (
              <GiftCardThumb
                key={card.id}
                onClick={() => {
                  setSelectedId(card.id);
                }}
                css={ThumbNailStyle(theme, card.id, selectedId)}
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
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div css={productWrapper(theme)}>
        <img
          css={productImage(theme)}
          src={selectedGift?.imageURL}
          alt={selectedGift?.name}
        />
        <div css={productInfo(theme)}>
          <p css={productName(theme)}>{selectedGift?.name}</p>
          <p css={productBrand(theme)}>{selectedGift?.brandInfo.name}</p>
          <p css={productPrice(theme)}>
            <strong>{selectedGift?.price.basicPrice.toLocaleString()}</strong>원
          </p>
        </div>
      </div>
      <div css={fixedBottomStyle(theme)}>
        <div css={totalPriceBoxStyle}>{totalPrice}주문하기</div>
      </div>
    </div>
  );
};

const fixedBottomStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  max-width: 688px;
  bottom: 0;
  padding-bottom: 100px;
  background-color: ${theme.colors.yellow.yellow500};
  padding: ${theme.spacing.spacing11};
`;

export default Order;

const ThumbNailStyle = (
  theme: Theme,
  cardId: number,
  selectedId: number | undefined
) => css`
  flex-shrink: 0;
  padding: ${theme.spacing.spacing0};
  border: ${selectedId === cardId ? "3px solid black" : "none"};
  border-radius: 4px;
  flex-shrink: 0;
`;

const ThumbNailContainerStyle = (theme: Theme) => css`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  gap: ${theme.spacing.spacing5};
`;

const CardWrapperStyle = (theme: Theme) => css`
  width: 100%;
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
  width :100%
  height : 80%;
  margin-bottom : 100px;
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
  padding: ${theme.spacing.spacing8};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
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
    padding: ${theme.spacing.spacing8};
    border: 1px solid;
    border-radius: 8px;
    height: 30px;
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

const productWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: ${theme.spacing.spacing4};
  border: 1px solid ${theme.colors.semantic.border.default};
  border-radius: 8px;
  width: 100%;
`;

const productImage = (theme: Theme) => css`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid ${theme.colors.semantic.border.default};
`;

const productInfo = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing2};
`;

const productName = (theme: Theme) => css`
  font-weight: ${theme.typography.subtitle1Bold.weight};
  font-size: ${theme.typography.subtitle1Bold.size};
  color: ${theme.colors.semantic.text.default};
`;

const productBrand = (theme: Theme) => css`
  font-size: ${theme.typography.body2Regular.size};
  color: ${theme.colors.semantic.text.sub};
`;

const productPrice = (theme: Theme) => css`
  font-size: ${theme.typography.body1Regular.size};
  color: ${theme.colors.semantic.text.default};
  strong {
    font-weight: ${theme.typography.subtitle1Bold.weight};
  }
`;

const totalPriceBoxStyle = (theme: Theme) => css`
  font-size: ${theme.typography.title2Bold.size};
  color: ${theme.colors.semantic.text.default};
  font-weight: ${theme.typography.subtitle1Bold.weight};
`;
