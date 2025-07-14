import styled from '@emotion/styled';
import { useFieldArray, type Control, type FieldErrors } from 'react-hook-form';
import type { OrderFormValue } from '@/types/OrderFormValues';
import type { Recipient } from '@/types/Recipient';
import { useState } from 'react';
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
const StyledRecipientsModalBasicLabelConatiner = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const StyledRecipientsAddModalContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const StyledRecipientsModalContianerRowItem = styled.div`
  width: 90%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-color: whitesmoke;
  border-width: 1px 1px 0px 1px;
  border-style: solid;

  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  :last-child {
    border-width: 1px 1px 1px 1px;
  }
`;

interface RecipientsModalContainerProps {
  control: Control<OrderFormValue>; // OrderFormValue 전체에 대한 control 타입
  errors: FieldErrors<OrderFormValue>; // OrderFormValue 전체에 대한 errors 타입
  currentRecipients: Recipient[];
}

const RecipientsModalContainer = ({
  control,
  currentRecipients,
}: RecipientsModalContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fields, replace } = useFieldArray({
    control,
    name: 'recipients', // OrderFormValue에 정의된 필드 이름과 일치
  });
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // AddRecipientsModal에서 새로운 Recipient[]를 받아와서 append
  const handleAddRecipients = (finalRecipients: Recipient[]) => {
    console.log('추가할 recipients', finalRecipients);
    replace(finalRecipients);
    console.log('추가 후 recipients', finalRecipients);
  };

  return (
    <StyledRecipientsModalContainer className='receive-person background-default margin-bottom-10'>
      <StyledRecipientsModalContainerBasicLabelDiv>
        <p className='title2Bold'>받는 사람</p>
        <button type='button' onClick={handleOpenModal}>
          추가
        </button>
      </StyledRecipientsModalContainerBasicLabelDiv>
      {fields.length === 0 ? (
        <StyledRecipientsModalBasicLabelConatiner className='no-recipients-message'>
          <p className='label2Regular'>받는 사람이 없습니다.</p>
          <p className='label2Regular'>받는 사람을 추가해주세요</p>
        </StyledRecipientsModalBasicLabelConatiner>
      ) : (
        <StyledRecipientsAddModalContainer>
          {fields.length > 0 ? (
            <StyledRecipientsModalContianerRowItem className='background-gray300'>
              <div>
                <p>이름</p>
              </div>
              <div>
                <p>전화번호</p>
              </div>
              <div>
                <p>수량</p>
              </div>
            </StyledRecipientsModalContianerRowItem>
          ) : (
            <></>
          )}
          {fields.map((field) => (
            <StyledRecipientsModalContianerRowItem key={field.id}>
              <div>
                <p>{field.receiveName}</p>
              </div>
              <div>
                <p>{field.receiveTel}</p>
              </div>
              <div>
                <p>{field.count}</p>
              </div>
            </StyledRecipientsModalContianerRowItem>
          ))}
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
