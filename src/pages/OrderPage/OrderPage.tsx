import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { messageCards } from '@/data/messageCards';
import MessageCardSelector, { type MessageCard } from './MessageCardSelector/MessageCardSelector';
import SelectedCardPreview from './SelectedCardPreview/SelectedCardPreview';
import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import SectionDivider from '@/components/SectionDivider';
import SenderInfo from './SenderInfo/SenderInfo';
import ReceiverInfo from './ReceiverInfo/ReceiverInfo';
import ProductSummary from './ProductSummary/ProductSummary';
import BottomButton from '@/components/BottomButton';

const OrderPage = () => {
  const [selectedCard, setSelectedCard] = useState<MessageCard | null>(null);
  const [message, setMessage] = useState('');

  const handleSelectCard = (card: MessageCard) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
  };

  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState('1');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);

    const isValid =
      senderName.trim() !== '' &&
      receiverName.trim() !== '' &&
      /^010\d{8}$/.test(receiverPhone) &&
      parseInt(quantity, 10) >= 1 &&
      message.trim() !== '';

    if (!isValid) {
      return;
    }

    console.log('폼 제출 완료!', {
      senderName,
      receiverName,
      receiverPhone,
      quantity,
      message,
    });
  };

  return (
    <Layout>
      <NavigationBar />
      <MessageCardSelector
        cards={messageCards}
        selectedId={selectedCard?.id ?? null}
        onSelect={handleSelectCard}
      />
      <SelectedCardPreview
        card={selectedCard ?? messageCards[0]}
        message={message || messageCards[0].defaultTextMessage}
        onChange={setMessage}
      />
      <SectionDivider />
      <SenderInfo
        senderName={senderName}
        onChangeSenderName={setSenderName}
        isSubmitted={isSubmitted}
      />
      <SectionDivider />
      <ReceiverInfo
        receiverName={receiverName}
        onChangeReceiverName={setReceiverName}
        receiverPhone={receiverPhone}
        onChangeReceiverPhone={setReceiverPhone}
        quantity={quantity}
        onChangeQuantity={setQuantity}
        isSubmitted={isSubmitted}
      />
      <SectionDivider />
      <SectionTitle title="상품 정보" />
      <ProductSummary />

      <BottomButton onClick={handleSubmit}>주문하기</BottomButton>
    </Layout>
  );
};

export default OrderPage;
