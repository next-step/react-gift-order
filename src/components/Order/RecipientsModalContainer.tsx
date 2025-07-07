import styled from '@emotion/styled';
import { useFieldArray, type Control, type FieldErrors } from 'react-hook-form';
import type { OrderFormValue } from '@/types/OrderFormValues';
import type { Recipient } from '@/types/Recipient';
import { useState, type FC } from 'react';
import RecipientsModal from './RecipientsModal';

const StyledRecipientsModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledRecipientsModalContainerBasicLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 95%;
  padding-bottom: 20px;

  p {
    margin-top: 6px;
    width: 95%;
  }
  button {
    width: 100px;
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
  currentRecipients: Recipient[];
}

const RecipientsModalContainer: FC<RecipientsModalContainerProps> = ({
  control,
  currentRecipients,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fields, append } = useFieldArray({
    control,
    name: 'recipients', // OrderFormValue에 정의된 필드 이름과 일치
  });
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // AddRecipientsModal에서 새로운 Recipient[]를 받아와서 append
  const handleAddRecipients = (newRecipients: Recipient[]) => {
    console.log('추가할 recipients', newRecipients);
    newRecipients.forEach((rec) => append(rec));
    console.log('추가 후 recipients', newRecipients);
  };

  return (
    <StyledRecipientsModalContainer className='receive-person background-default'>
      <StyledRecipientsModalContainerBasicLabelDiv>
        <p className='title2Bold'>받는 사람</p>
        <button type='button' onClick={handleOpenModal}>
          추가
        </button>
      </StyledRecipientsModalContainerBasicLabelDiv>

      {fields.length === 0 ? (
        <StyledRecipientsAddModalContainer className='no-recipients-message'>
          <p className='label2Regular'>받는 사람이 없습니다.</p>
          <p className='label2Regular'>받는 사람을 추가해주세요</p>
        </StyledRecipientsAddModalContainer>
      ) : (
        <StyledRecipientsAddModalContainer>
          <table>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {fields.map((field) => (
                <tr key={field.id}>
                  <td>{field.receiveName}</td>
                  <td>{field.receiveTel}</td>
                  <td>{field.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </StyledRecipientsAddModalContainer>
      )}

      {isModalOpen && (
        <RecipientsModal
          onClose={handleCloseModal}
          onAdd={handleAddRecipients}
          existedRecipients={currentRecipients}
        />
      )}
    </StyledRecipientsModalContainer>
  );
};

export default RecipientsModalContainer;
