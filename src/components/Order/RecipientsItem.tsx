import React from 'react';
import styled from '@emotion/styled';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import RecipientsModalFormData from './RecipientsModal'; // 타입 임포트 (RecipientsModal에서 정의한 폼 데이터 타입)

// Props 타입 정의
interface RecipientsItemProps {
  index: number; // 배열 인덱스
  register: UseFormRegister<RecipientsModalFormData>; // 모달 내부 폼의 register 타입
  errors: FieldErrors<RecipientsModalFormData>; // 모달 내부 폼의 errors 타입
}

const StyledRecipientsItem = styled.div`
  h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.1em;
    color: #333;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    &.input-error {
      border-color: red;
      box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
    }
  }
  .error-message {
    color: red;
    font-size: 0.85em;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

const RecipientsItem: React.FC<RecipientsItemProps> = ({ index, register, errors }) => {
  return (
    <StyledRecipientsItem>
      <h3>받는 사람 {index + 1}</h3>
      <div>
        <label htmlFor={`newRecipients[${index}].name`}>이름</label>
        <input
          id={`newRecipients[${index}].name`}
          type='text'
          {...register(`newRecipients.${index}.name`, { required: `받는 사람 ${index + 1}의 이름은 필수입니다.` })}
          className={errors.newRecipients?.[index]?.name ? 'input-error' : ''}
        />
        {errors.newRecipients?.[index]?.name && <p className='error-message'>{(errors.newRecipients[index].name as any)?.message}</p>}
      </div>
      <div>
        <label htmlFor={`newRecipients[${index}].contact`}>연락처</label>
        <input
          id={`newRecipients[${index}].contact`}
          type='text'
          {...register(`newRecipients.${index}.contact`, { required: `받는 사람 ${index + 1}의 연락처는 필수입니다.` })}
          className={errors.newRecipients?.[index]?.contact ? 'input-error' : ''}
        />
        {errors.newRecipients?.[index]?.contact && <p className='error-message'>{(errors.newRecipients[index].contact as any)?.message}</p>}
      </div>
    </StyledRecipientsItem>
  );
};

export default RecipientsItem;
