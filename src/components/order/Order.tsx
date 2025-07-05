import { useEffect, useRef, useState } from "react";
import { cardData } from "@/data/cardData";
import { useTheme } from "@emotion/react";
import { GiftCardThumb } from "@/components/GiftCardThumb";
import { useParams } from "react-router-dom";
import { giftData } from "@/data/giftData";
import {
  ThumbNailStyle,
  ThumbNailContainerStyle,
  CardWrapperStyle,
  WrapperStyle,
  MessageStyle,
  FormSectionWrapperStyle,
  ReceiverFormStyle,
  InputRowStyle,
  TextStyle,
  TinyTextStyle,
  productWrapper,
  productImage,
  productInfo,
  productName,
  productBrand,
  productPrice,
  totalPriceBoxStyle,
  fixedBottomStyle,
} from "@/components/order/Order.style";

const Order: React.FC = () => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<number>();
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const SenderNameRef = useRef(null);
  const ReceiverNameRef = useRef(null);
  const PhoneNumberRef = useRef(null);
  const CountRef = useRef(null);

  const selectedGiftId = id ? parseInt(id, 10) : undefined;
  const selectedGift = giftData.find((gift) => gift.id === selectedGiftId);

  useEffect(() => {
    const price = Number(selectedGift?.price.sellingPrice || 0);
    setTotalPrice(quantity * price);
  }, [selectedGift?.price.sellingPrice, quantity]);

  // const nameValidator = () => {};

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
          <input ref={SenderNameRef} placeholder="이름을 입력하세요."></input>
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
            <input
              ref={ReceiverNameRef}
              placeholder="이름을 입력하세요."
            ></input>
          </div>
          <div css={InputRowStyle(theme)}>
            <span>전화번호</span>
            <input
              ref={PhoneNumberRef}
              placeholder="전화번호를 입력하세요."
            ></input>
          </div>
          <div css={InputRowStyle(theme)}>
            <span>수량</span>
            <input
              ref={CountRef}
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
        <div onClick={() => {}} css={totalPriceBoxStyle}>
          {totalPrice}주문하기
        </div>
      </div>
    </div>
  );
};

export default Order;
