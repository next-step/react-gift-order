import PageContainer from "@/components/PageContainer";
import CardSelectionSection from "@/sections/OrderSection/CardSelectionSection";
import MessageInputSection from "@/sections/OrderSection/MessageInputSection";
import SenderSection from "@/sections/OrderSection/SenderSection";
import ReceiverSection from "@/sections/OrderSection/ReceiverSection";
import ProductInfoSection from "@/sections/OrderSection/ProductInfoSection";
import BottomOrderBar from "@/sections/OrderSection/BottomOrderBar";
import { useParams, useNavigate } from "react-router";
import { giftRankingData } from "@/mocks/giftRankingData";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { messageCardData } from "@/mocks/messageCardData";
import { validateMessage, validateName, validatePhone, validateQuantity, } from "@/utils/validate";
import { useValidate } from "@/hooks/useValidate";

export default function OrderPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoggedIn } = useAuth();

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const rank = Number(id);
  const repeatedData = Array(12).fill(null).flatMap(() => giftRankingData);
  const product = repeatedData[rank - 1];

  const defaultCardId = messageCardData[0]?.id ?? 1;
  const [selectedCardId, setSelectedCardId] = useState(defaultCardId);
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [touched, setTouched] = useState(false);

  const messageValidation = useValidate(message, validateMessage);
  const senderValidation = useValidate(sender, validateName);
  const receiverNameValidation = useValidate(receiverName, validateName);
  const receiverPhoneValidation = useValidate(receiverPhone, validatePhone);
  const quantityValidation = useValidate(String(quantity), (val) =>
    validateQuantity(Number(val))
  );

  useEffect(() => {
    const userInStorage = localStorage.getItem("user");
    if (!userInStorage && !isLoggedIn) {
      navigate("/login");
    } else {
      setIsAuthChecked(true);
    }
  }, [isLoggedIn, navigate]);

  if (!isAuthChecked) return <PageContainer>로딩 중...</PageContainer>;

  if (!product || isNaN(rank) || rank < 1 || rank > repeatedData.length) {
    return <PageContainer>존재하지 않는 상품입니다.</PageContainer>;
  }

  const totalPrice = product.price.sellingPrice * quantity;

  const isValid =
    messageValidation.isValid &&
    senderValidation.isValid &&
    receiverNameValidation.isValid &&
    receiverPhoneValidation.isValid &&
    quantityValidation.isValid;

  const handleOrder = () => {
    setTouched(true);
    messageValidation.validateNow();
    senderValidation.validateNow();
    receiverNameValidation.validateNow();
    receiverPhoneValidation.validateNow();
    quantityValidation.validateNow();
    if (!isValid) return;
    alert(`🎁 ${rank}등 상품 주문 완료!`);
    navigate("/");
  };

  return (
    <PageContainer>
      <CardSelectionSection
        selectedCardId={selectedCardId}
        onSelect={setSelectedCardId}
        setMessage={setMessage}
      />
      <MessageInputSection
        message={message}
        setMessage={setMessage}
        touched={touched}
        error={messageValidation.error}
        onBlur={messageValidation.onBlur}
      />
      <SenderSection
        sender={sender}
        setSender={setSender}
        touched={touched}
        error={senderValidation.error}
        onBlur={senderValidation.onBlur}
      />
      <ReceiverSection
        receiverName={receiverName}
        receiverPhone={receiverPhone}
        quantity={quantity}
        setReceiverName={setReceiverName}
        setReceiverPhone={setReceiverPhone}
        setQuantity={setQuantity}
        touched={touched}
        errors={{
          receiverName: receiverNameValidation.error,
          receiverPhone: receiverPhoneValidation.error,
          quantity: quantityValidation.error,
        }}
        onBlurs={{
          receiverName: receiverNameValidation.onBlur,
          receiverPhone: receiverPhoneValidation.onBlur,
          quantity: quantityValidation.onBlur,
        }}
      />
      <ProductInfoSection
        product={{
          imageUrl: product.imageURL,
          name: product.name,
          brand: product.brandInfo.name,
          price: product.price.sellingPrice,
        }}
      />
      <BottomOrderBar totalPrice={totalPrice} isValid onOrder={handleOrder} />
    </PageContainer>
  );
}
