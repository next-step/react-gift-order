import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EXPANDED_LIST_STORAGE_ID } from '@/constants/storage.ts';
import { renderOrderSuccessToast } from '@/utils/toastContents.tsx';
import { toast } from 'react-toastify';

export default function OrderButton({ id, count, receiverForm }) {
  const { handleSubmit } = useFormContext();
  const { submittedRef } = receiverForm;
  const navigate = useNavigate();

  const item = JSON.parse(localStorage.getItem(EXPANDED_LIST_STORAGE_ID))[id - 1];
  const price = item.price.sellingPrice * count;

  const onSubmit = data => {
    if (!submittedRef.current|| submittedRef.current.length === 0) return;

    const { textMessage, senderName } = data;

    toast(renderOrderSuccessToast(item.name, count, senderName, textMessage), {
      type: 'success',
      autoClose: 3000,
      style: { width: '400px' },
    });

    navigate('/');
  }

  return (
    <PriceButton onClick={handleSubmit(onSubmit)}>{price}원 주문하기</PriceButton>
  )
}
