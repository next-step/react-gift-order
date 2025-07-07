// @components/Order/RecipientsModal.tsx
import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'; // useForm, SubmitHandler, FieldErrors 임포트
import RecipientsItem from './RecipientsItem'; // 다음 단계에서 구현할 개별 아이템 컴포넌트
import type { Recipient } from '@/types/Recipient'; // Recipient 타입 임포트
import type { RecipientsModalFormData } from '@/types/RecipientsModalFormData';

// RecipientsModal 내부 폼의 데이터 타입

// Props 타입 정의: 모달 닫기 함수와 받는 사람 추가 완료 시 호출될 콜백
interface RecipientsModalProps {
  onClose: () => void;
  onAdd: (newRecipients: Recipient[]) => void;
  existedRecipients: Recipient[];
}

const StyledModalMainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyeldModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 80vh; /* 모달 높이 제한 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
`;

const SteyldModalHeader = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  button {
    border: 1px transparent;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background-color: gray;
    margin: 5px 0px 5px 0px;
  }
`;

const StyledModalBody = styled.div`
  margin-bottom: 20px;
  min-height: 100px;
  /* 각 RecipientsItem 간의 간격 */
  & > div {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #eee;
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const StyledRecipientsModalFooterBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    border: 1px solid transparent;
    width: 50%;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const RecipientsModal: React.FC<RecipientsModalProps> = ({ onClose, onAdd, existedRecipients }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    control,
  } = useForm<RecipientsModalFormData>({
    defaultValues: {
      newRecipients: [], // 초기값은 비어있지만, useEffect에서 existedRecipients로 채워질 것
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'newRecipients',
  });

  // 고유 ID 생성을 위한 ref. existedRecipients의 길이부터 시작하여 중복 방지.
  const nextIdRef = useRef(0);

  useEffect(() => {
    // existedRecipients에 고유 ID를 부여하여 필드 초기화
    // 기존 데이터에 ID가 없다면 새로 부여하고, 있다면 기존 ID를 사용
    const initialFields = existedRecipients.map((rec, index) => ({
      ...rec,
      id: rec.id || `${Date.now()}-${index}`, // 고유 ID가 없다면 생성
    }));
    reset({
      newRecipients: initialFields,
    });
    // 다음 ID는 현재 필드 수만큼 설정
    nextIdRef.current =
      initialFields.length > 0
        ? Math.max(...initialFields.map((f) => Number(f.id.split('-')[1]) || 0)) + 1
        : 0;
  }, [existedRecipients, reset]);

  const handleAddPersonField = () => {
    if (fields.length >= 10) {
      alert('최대 10명까지 추가할 수 있습니다.');
      return;
    }
    // 새로운 필드에 고유 ID 부여
    append({
      receiveName: '',
      receiveTel: '',
      count: 0,
      id: `${Date.now()}-${nextIdRef.current++}`,
    });
  };

  const handleRemovePersonField = (idToRemove: string) => {
    // id를 기반으로 해당 필드의 인덱스를 찾아 제거
    const indexToRemove = fields.findIndex((field) => field.id === idToRemove);
    if (indexToRemove !== -1) {
      remove(indexToRemove);
    }
  };

  const onSubmit: SubmitHandler<RecipientsModalFormData> = (data) => {
    onAdd(data.newRecipients);
    onClose();
  };

  return (
    <StyledModalMainContainer onClick={onClose}>
      <StyeldModalContent onClick={(e) => e.stopPropagation()}>
        <SteyldModalHeader>
          <h2 className='title1Bold'>받는 사람</h2>
          <p className='body2Regular'>* 최대 10명까지 추가할 수 있어요</p>
          <p className='body2Regular'>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요</p>
          <button type='button' onClick={handleAddPersonField} className='add-person-field'>
            추가하기
          </button>
        </SteyldModalHeader>
        <StyledModalBody>
          {fields.map((field, index) => (
            <RecipientsItem
              key={field.id}
              id={field.id as string} // field.id는 useFieldArray에서 string을 반환
              index={index}
              register={register}
              errors={errors}
              onRemove={handleRemovePersonField} // 모달 내부의 remove 함수 전달
              getValues={getValues}
              // existedRecipients 대신 현재 모달의 모든 필드 (allNewRecipients)를 전달하여 중복 검사에 활용
              allRecipientsInModal={fields as Recipient[]}
              // 초기 데이터는 field 자체를 전달 (이미 useFieldArray에 의해 관리되고 있으므로)
            />
          ))}
        </StyledModalBody>
        <StyledRecipientsModalFooterBtnContainer>
          <button type='button' className='cancel' onClick={onClose}>
            취소
          </button>
          <button
            type='button'
            className='add background-kakaoyellow'
            onClick={handleSubmit(onSubmit)}
          >
            {fields.length}명 완료
          </button>
        </StyledRecipientsModalFooterBtnContainer>
      </StyeldModalContent>
    </StyledModalMainContainer>
  );
};

export default RecipientsModal;
