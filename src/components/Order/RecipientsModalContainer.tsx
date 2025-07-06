import { StyledRecipientsModalContainer } from '@styles/Order/OrderContainer/StyledRecipientsModalContainer';
import styled from '@emotion/styled';
import { useFieldArray, type Control, type FieldErrors } from 'react-hook-form';
import type { OrderFormValue } from '@/types/OrderFormValues';
import type { Recipients } from '@/types/Recipients';
import { useState, type FC } from 'react';
import RecipientsModal from './RecipientsModal';

const StyledRecipientsModalContainerBasicLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  div {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 20px;
  }

  p {
    margin-top: 6px;
    width: 95%;
  }
`;
const StyledRecipientsAddModalContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px black solid;
  margin-bottom: 20px;

  div {
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px black solid;
  }
`;
interface RecipientsModalContainerProps {
  control: Control<OrderFormValue>; // OrderFormValue 전체에 대한 control 타입
  errors: FieldErrors<OrderFormValue>; // OrderFormValue 전체에 대한 errors 타입
  // watch('recipients') 값을 직접 받는 경우
  currentRecipients: Recipients[];
}

const RecipientsModalContainer: FC<RecipientsModalContainerProps> = ({ control, errors, currentRecipients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients', // OrderFormValue에 정의된 필드 이름과 일치
  });
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  // AddRecipientsModal에서 새로운 Recipient[]를 받아와서 append
  const handleAddRecipients = (newRecipients: Recipients[]) => {
    newRecipients.forEach((rec) => append(rec));
    handleCloseModal();
  };

  // recipients 필드 전체에 대한 에러 (예: 필수 입력)
  // errors.recipients는 FieldErrors<Recipient[]> 타입이거나 undefined일 수 있습니다.
  const recipientsError = errors.recipients as FieldErrors<Recipients[]> | undefined;

  return (
    <StyledRecipientsModalContainerBasicLabelDiv className='receive-person background-default'>
      <div>
        <p className='title2Bold'>받는 사람</p>
        <button type='button' onClick={handleOpenModal}>
          추가
        </button>
      </div>

      {fields.length === 0 ? (
        <StyledRecipientsAddModalContainer className='no-recipients-message'>
          <p className='label2Regular'>받는 사람이 없습니다.</p>
          <p className='label2Regular'>받는 사람을 추가해주세요</p>
        </StyledRecipientsAddModalContainer>
      ) : (
        <StyledRecipientsAddModalContainer>
          <ul>
            {fields.map((field, index) => (
              <li key={field.id}>
                {field.reciveName} ({field.reciveTel}){field.count}
                <button type='button' onClick={() => remove(index)} className='remove-button'>
                  삭제
                </button>
                {/* 개별 받는 사람 필드의 오류 메시지 표시 (예: 이름, 연락처) */}
                {recipientsError?.[index]?.reciveName && (
                  <span style={{ color: 'red', marginLeft: '10px' }}>{(recipientsError[index]?.reciveName as any)?.message}</span>
                )}
                {recipientsError?.[index]?.reciveTel && (
                  <span style={{ color: 'red', marginLeft: '10px' }}>{(recipientsError[index]?.reciveTel as any)?.message}</span>
                )}
                {recipientsError?.[index]?.count && (
                  <span style={{ color: 'red', marginLeft: '10px' }}>{(recipientsError[index]?.count as any)?.message}</span>
                )}
              </li>
            ))}
          </ul>
        </StyledRecipientsAddModalContainer>
      )}

      {/* 받는 사람 배열 자체에 대한 유효성 오류 (예: 최소 1명 필요) */}
      {recipientsError && Object.keys(recipientsError).length > 0 && !Array.isArray(recipientsError) && (
        <p style={{ color: 'red', marginTop: '10px' }}>{/* 받는 사람 목록에 대한 일반적인 오류 메시지 */}</p>
      )}

      {isModalOpen && <RecipientsModal onClose={handleCloseModal} onAdd={handleAddRecipients} />}
    </StyledRecipientsModalContainerBasicLabelDiv>
  );
};

export default RecipientsModalContainer;
