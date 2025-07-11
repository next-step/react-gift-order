import { useEffect, useRef, useState } from "react";
import { cardData } from "@/data/cardData";
import { useTheme } from "@emotion/react";
import { useParams } from "react-router-dom";
import { giftData } from "@/data/giftData";
import CardView from "@/components/order/CardView";
import {
  CardWrapperStyle,
  WrapperStyle,
  MessageStyle,
  FormSectionWrapperStyle,
  // ReceiverFormStyle,
  InputRowStyle,
  TextStyle,
  TinyTextStyle,
  productWrapper,
  productImage,
  productInfoStyle,
  productNameStyle,
  productBrandStyle,
  productPriceStyle,
  totalPriceBoxStyle,
  fixedBottomStyle,
  SubmitStyle,
  InputWrapperStyle,
  ErrorMessageStyle,
} from "@/components/order/Order.style";
import OrderForm from "@/components/order/OrderForm";
import type { FormData } from "@/components/order/OrderForm";
import { css } from "@emotion/react";

const Order: React.FC = () => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<number>();
  const { id } = useParams<{ id: string }>();
  const [quantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const SenderNameRef = useRef<HTMLInputElement>(null);
  const GiftMessageRef = useRef<HTMLTextAreaElement>(null);
  const [messageError, setMessageError] = useState("");
  const [senderError, setSenderError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receivers, setReceivers] = useState<
    { name: string; phoneNumber: string; quantity: number }[]
  >([]);

  const handleSubmit = () => {
    const msg = GiftMessageRef.current?.value.trim() ?? "";
    const sender = SenderNameRef.current?.value.trim() ?? "";

    let isValid = true;

    if (sender === "") {
      setSenderError("보내는 사람 이름을 입력해주세요.");
      isValid = false;
    } else {
      setSenderError("");
    }

    if (msg === "") {
      setMessageError("메시지를 입력해주세요.");
      isValid = false;
    } else {
      setMessageError("");
    }
    if (!isValid) return;
    alert("결제 완료!");
  };

  const selectedGiftId = id ? parseInt(id, 10) : undefined;
  const selectedGift = giftData.find((gift) => gift.id === selectedGiftId);

  useEffect(() => {
    const price = Number(selectedGift?.price.sellingPrice || 0);
    setTotalPrice(quantity * price);
  }, [selectedGift?.price.sellingPrice, quantity]);

  return (
    <div css={WrapperStyle(theme)}>
      <div css={CardWrapperStyle(theme)}>
        <CardView
          theme={theme}
          selectedId={selectedId}
          onSelect={setSelectedId}
        ></CardView>
        <img
          src={
            selectedId === undefined
              ? cardData[0].imageUrl
              : cardData.find((card) => card.id === selectedId)?.imageUrl
          }
        ></img>
      </div>
      <div css={MessageStyle(theme)}>
        <textarea ref={GiftMessageRef} defaultValue="축하해요."></textarea>
        {messageError && <p css={ErrorMessageStyle}>{messageError}</p>}
      </div>
      <div css={FormSectionWrapperStyle(theme)}>
        <p css={TextStyle(theme)}>보내는 사람</p>
        <div css={InputRowStyle(theme)}>
          <div css={InputWrapperStyle}>
            <input
              type="text"
              ref={SenderNameRef}
              placeholder="이름을 입력하세요."
            ></input>
            {senderError && <p css={ErrorMessageStyle}>{senderError}</p>}
          </div>
        </div>
        <p css={TinyTextStyle}>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </p>
      </div>

      <div css={ReceiverSection}>
        <div css={ReceiverHeader}>
          <h2>받는 사람</h2>
          <button onClick={() => setIsModalOpen(true)}>추가</button>
        </div>

        {isModalOpen && (
          <ReceiverModal
            onClose={() => setIsModalOpen(false)}
            onSave={(formData: FormData) => {
              setReceivers((prev) => [...prev, ...formData.order]);
              setIsModalOpen(false);
            }}
          />
        )}
      </div>

      <div css={productWrapper(theme)}>
        <img
          css={productImage(theme)}
          src={selectedGift?.imageURL}
          alt={selectedGift?.name}
        />
        <div css={productInfoStyle(theme)}>
          <p css={productNameStyle(theme)}>{selectedGift?.name}</p>
          <p css={productBrandStyle(theme)}>{selectedGift?.brandInfo.name}</p>
          <p css={productPriceStyle(theme)}>
            <strong>{selectedGift?.price.basicPrice.toLocaleString()}</strong>원
          </p>
        </div>
      </div>
      <div css={fixedBottomStyle(theme)}>
        <div
          onClick={() => {
            handleSubmit();
          }}
          css={totalPriceBoxStyle}
        >
          <p css={SubmitStyle(theme)}>{totalPrice}원 주문하기</p>
        </div>
      </div>
    </div>
  );
};

export default Order;

const ReceiverSection = css`
  width: 100%;
`;

const ReceiverHeader = css`
  display: flex;
  justify-content: space-between;
`;

const ReceiverModal = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: formData;
}) => {
  return (
    <>
      <div css={OverlayStyle} onClick={onClose} />
      <div css={ModalStyle}>
        <h2>받는 사람 추가</h2>
        <OrderForm
          onSubmitCallback={(formData) => {
            onSave(formData);
          }}
        />
        <button onClick={onClose}>취소</button>
      </div>
    </>
  );
};

const ModalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
`;

const OverlayStyle = css`
  position: fixed;
`;
