/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import type { RecipientsModalFormData } from '@/types/RecipientsModalFormData'; // 타입 임포트 (RecipientsModal에서 정의한 폼 데이터 타입)
import type { Recipient } from '@/types/Recipient';

// Props 타입 정의
interface RecipientsItemProps {
  index: number; // 배열 인덱스
  id: string;
  // register: UseFormRegister<RecipientsModalFormData>; // 모달 내부 폼의 register 타입
  // errors: FieldErrors<RecipientsModalFormData>; // 모달 내부 폼의 errors 타입
  onRemove: (id: string) => void;
  getValues: () => RecipientsModalFormData;
  allRecipientsInModal: (Recipient & { id?: string })[];
}

const StyledRecipientsItemContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledRecipientsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 10px 0px;

  label {
    width: 20%;
  }
`;

const StyledInputErrorMsgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
`;
const RecipientsItem = ({ index, onRemove, id, allRecipientsInModal }: RecipientsItemProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RecipientsModalFormData>();

  return (
    <>
      <StyledRecipientsItemContainerHeader>
        <p className='body1Bold'>받는 사람 {index + 1}</p>
        {allRecipientsInModal.length >= 1 && (
          <button type='button' onClick={() => onRemove(id)}>
            삭제
          </button>
        )}
      </StyledRecipientsItemContainerHeader>
      <StyledRecipientsItem>
        <label className='body2Regular' htmlFor={`newRecipients[${index}].name`}>
          이름
        </label>
        <StyledInputErrorMsgContainer>
          <input
            id={`newRecipients[${index}].name`}
            type='text'
            {...register(`newRecipients.${index}.receiveName`)}
            className={errors.newRecipients?.[index]?.receiveName ? 'input-error' : ''}
          />
          {errors.newRecipients?.[index]?.receiveName && (
            <p className='error-message'>
              {(errors.newRecipients[index].receiveName as any)?.message}
            </p>
          )}
        </StyledInputErrorMsgContainer>
      </StyledRecipientsItem>
      <StyledRecipientsItem>
        <label className='body2Regular' htmlFor={`newRecipients[${index}].receiveTel`}>
          연락처
        </label>
        <StyledInputErrorMsgContainer>
          <input
            id={`newRecipients[${index}].receiveTel`}
            type='text'
            {...register(`newRecipients.${index}.receiveTel`)}
            className={errors.newRecipients?.[index]?.receiveTel ? 'input-error' : ''}
          />
          {errors.newRecipients?.[index]?.receiveTel && (
            <p className='error-message'>
              {(errors.newRecipients[index].receiveTel as any)?.message}
            </p>
          )}
        </StyledInputErrorMsgContainer>
      </StyledRecipientsItem>
      <StyledRecipientsItem>
        <label className='body2Regular' htmlFor={`newRecipients[${index}].count`}>
          수량
        </label>
        <StyledInputErrorMsgContainer>
          <input
            id={`newRecipients[${index}].count`}
            type='number'
            {...register(`newRecipients.${index}.count`, {
              valueAsNumber: true, // 숫자로 변환하여 저장
            })}
            className={errors.newRecipients?.[index]?.count ? 'input-error' : ''}
          />
          {errors.newRecipients?.[index]?.count && (
            <p className='error-message'>{(errors.newRecipients[index].count as any)?.message}</p>
          )}
        </StyledInputErrorMsgContainer>
      </StyledRecipientsItem>
    </>
  );
};

export default RecipientsItem;
