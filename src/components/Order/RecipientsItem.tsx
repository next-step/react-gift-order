import React from 'react';
import styled from '@emotion/styled';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import type { RecipientsModalFormData } from '@/types/RecipientsModalFormData'; // 타입 임포트 (RecipientsModal에서 정의한 폼 데이터 타입)

// Props 타입 정의
interface RecipientsItemProps {
  index: number; // 배열 인덱스
  id: number;
  register: UseFormRegister<RecipientsModalFormData>; // 모달 내부 폼의 register 타입
  errors: FieldErrors<RecipientsModalFormData>; // 모달 내부 폼의 errors 타입
  onRemove: (id: number) => void;
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
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;
const RecipientsItem: React.FC<RecipientsItemProps> = ({
  index,
  register,
  errors,
  onRemove,
  id,
}) => {
  return (
    <div>
      <StyledRecipientsItemContainerHeader>
        <p className='body1Bold'>받는 사람 {index + 1}</p>
        <button onClick={() => onRemove(id)}>삭제</button>
      </StyledRecipientsItemContainerHeader>
      <StyledRecipientsItem>
        <label className='body2Regular' htmlFor={`newRecipients[${index}].name`}>
          이름
        </label>
        <StyledInputErrorMsgContainer>
          <input
            id={`newRecipients[${index}].name`}
            type='text'
            {...register(`newRecipients.${index}.receiveName`, {
              required: `받는 사람 ${index + 1}의 이름은 필수입니다.`,
            })}
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
            {...register(`newRecipients.${index}.receiveTel`, {
              required: `받는 사람 ${index + 1}의 연락처는 필수입니다.`,
            })}
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
              required: `받는 사람 ${index + 1}의 수량은 필수입니다.`,
            })}
            className={errors.newRecipients?.[index]?.count ? 'input-error' : ''}
          />
          {errors.newRecipients?.[index]?.count && (
            <p className='error-message'>{(errors.newRecipients[index].count as any)?.message}</p>
          )}
        </StyledInputErrorMsgContainer>
      </StyledRecipientsItem>
    </div>
  );
};

export default RecipientsItem;
