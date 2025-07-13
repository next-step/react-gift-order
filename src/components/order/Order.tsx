import { useRef, useState } from "react";
import { cardData } from "@/data/cardData";
import { useTheme } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import { giftData } from "@/data/giftData";
import CardView from "@/components/order/CardView";
import {
  CardWrapperStyle,
  WrapperStyle,
  MessageStyle,
  FormSectionWrapperStyle,
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
import type { FormData } from "@/components/order/OrderForm";
import { css } from "@emotion/react";
import ReceiverModal from "@/components/order/ReceiverModal";
import type { Theme } from "@emotion/react";
import ReceiverInfoTable from "@/components/order/ReceiverInfoTable";

const Order: React.FC = () => {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<number>();
  const { id } = useParams<{ id: string }>();
  const SenderNameRef = useRef<HTMLInputElement>(null);
  const GiftMessageRef = useRef<HTMLTextAreaElement>(null);
  const [messageError, setMessageError] = useState("");
  const [senderError, setSenderError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receivers, setReceivers] = useState<
    { receiverName: string; phoneNumber: string; quantity: number }[]
  >([]);
  const navigate = useNavigate();
  const totalQuantity =
    receivers.length === 0
      ? 1
      : receivers.reduce((sum, receiver) => sum + Number(receiver.quantity), 0);

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
    alert(
      `주문 상품명: ${selectedGift?.name}\n` +
        `보내는 사람: ${SenderNameRef.current?.value}\n` +
        `메시지: ${GiftMessageRef.current?.value}\n` +
        `받는 사람 수: ${receivers.length}명\n` +
        `총 수량: ${totalQuantity}개`
    );
    navigate("/");
  };

  const selectedGiftId = id ? parseInt(id, 10) : undefined;
  const selectedGift = giftData.find((gift) => gift.id === selectedGiftId);

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
              css={SenderInputStyle}
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
            savedReceiverInfo={receivers}
          />
        )}

        {receivers.length > 0 && (
          <ReceiverInfoTable receivers={receivers}></ReceiverInfoTable>
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
          <p css={SubmitStyle(theme)}>
            {(selectedGift?.price?.sellingPrice || 0) * totalQuantity}원
            주문하기
          </p>
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

const SenderInputStyle = (theme: Theme) => css`
  padding: ${theme.spacing.spacing2};
  height: 32px;
  font-size: ${theme.typography.body1Regular.size};
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 6px;
`;
