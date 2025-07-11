import { useState } from 'react';
import { Label, ReceiverModal } from '@/components';
import * as S from './styles';

const ReceiverSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.FirstSection>
          <S.SectionTitle>
            <Label variant="bold">받는 사람</Label>
            <S.ModalBtn onClick={handleModalOpen}>추가</S.ModalBtn>
          </S.SectionTitle>
        </S.FirstSection>
        <S.EmptyState>
          <S.EmptyStateText>
            받는 사람이 없습니다.<br />
            받는 사람을 추가해주세요.
          </S.EmptyStateText>
        </S.EmptyState>
      </S.Container>

      <ReceiverModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onCancel={handleModalClose}
        onComplete={handleModalClose}
      />
    </>
  );
};

export default ReceiverSection; 