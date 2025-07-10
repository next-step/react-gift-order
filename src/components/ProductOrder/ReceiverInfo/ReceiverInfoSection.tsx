import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import ReceiverInfoModal from './ReceiverInfoModal';
import BaseButton from '@/common/BaseButton';
import styled from '@emotion/styled';

const ReceiverInfoSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section>
      <Header>
        <h3>받는 사람</h3>
        <BaseButton onClick={() => setIsModalOpen(true)}>추가</BaseButton>
      </Header>
      <div>
        <label>이름</label>
        <input
          {...register('receiverName', { required: '이름을 입력해주세요.' })}
        />
        {errors.receiverName?.message &&
          typeof errors.receiverName.message === 'string' && (
            <p>{errors.receiverName.message}</p>
          )}
        <label>전화번호</label>
        <input
          {...register('receiverPhone', {
            required: '전화번호를 입력해주세요.',
          })}
        />
        {errors.receiverName?.message &&
          typeof errors.receiverName.message === 'string' && (
            <p>{errors.receiverName.message}</p>
          )}
        <label>수량</label>
        <input type="number" {...register('quantity', { min: 1 })} />
        {errors.quantity && <p>수량은 1 이상이어야 합니다.</p>}
      </div>
      <ReceiverInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
};

export default ReceiverInfoSection;

const Section = styled.section``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
