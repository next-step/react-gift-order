// @components/Order/RecipientsModal.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm, type SubmitHandler } from 'react-hook-form'; // useForm, SubmitHandler, FieldErrors 임포트
import RecipientsItem from './RecipientsItem'; // 다음 단계에서 구현할 개별 아이템 컴포넌트
import type { Recipient } from '@/types/Recipient'; // Recipient 타입 임포트
import type { RecipientsModalFormData } from '@/types/RecipientsModalFormData';

// RecipientsModal 내부 폼의 데이터 타입

// Props 타입 정의: 모달 닫기 함수와 받는 사람 추가 완료 시 호출될 콜백
interface RecipientsModalProps {
  onClose: () => void;
  onAdd: (newRecipients: Recipient[]) => void;
}

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
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

const ModalHeader = styled.div`
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

const ModalBody = styled.div`
  margin-bottom: 20px;
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

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &.cancel {
      background-color: #ccc;
      color: #333;
    }
    &.add {
      background-color: #28a745;
      color: white;
    }
    &.add-person-field {
      background-color: #007bff;
      color: white;
      margin-top: 10px;
      width: 100%;
    }
  }
`;

const RecipientsModal: React.FC<RecipientsModalProps> = ({ onClose, onAdd }) => {
  // 모달 내부에 표시될 받는 사람 입력 필드의 개수를 관리
  // 각 필드 그룹에 고유한 키를 주기 위해 { id: number } 객체를 사용
  const [fieldSets, setFieldSets] = useState([{ id: 0 }]);
  const nextId = React.useRef(1); // 고유 ID 생성을 위한 ref

  // 모달 내부 폼을 위한 useForm 인스턴스
  // newRecipients 배열을 관리합니다.
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RecipientsModalFormData>({
    defaultValues: {
      newRecipients: [{ receiveName: '', receiveTel: '', count: 0 }],
    },
  });

  const handleAddPersonField = () => {
    setFieldSets((prev) => [...prev, { id: nextId.current++ }]);
    onClose();
  };
  const handleRemovePersonField = (id: number) => {
    setFieldSets((prev) => prev.filter((field) => field.id !== id));
    console.log('modal item 삭제 함수 실행');
  };

  const onSubmit: SubmitHandler<RecipientsModalFormData> = (data) => {
    // 유효한 받는 사람만 필터링 (이름과 연락처가 모두 있는 경우)
    const validRecipients = data.newRecipients.filter(
      (rec) => rec.receiveName && rec.receiveTel && rec.count
    );
    if (validRecipients.length > 0) {
      onAdd(validRecipients); // 부모 컴포넌트(RecipientsModalContainer)로 유효한 받는 사람 목록 전달
      // 모달 닫기 전에 폼 상태 초기화
      reset({
        newRecipients: [{ receiveName: '', receiveTel: '', count: 0 }],
      });
      setFieldSets([{ id: 0 }]); // 필드 세트도 초기화
    } else {
      // 모든 필드가 비어있는 경우
      alert('최소 한 명의 받는 사람 정보를 입력해주세요.');
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2 className='title1Bold'>받는 사람</h2>
          <p className='body2Regular'>* 최대 10명까지 추가할 수 있어요</p>
          <p className='body2Regular'>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요</p>
          <button type='button' onClick={handleAddPersonField} className='add-person-field'>
            추가하기
          </button>
        </ModalHeader>
        <ModalBody>
          {fieldSets.map((fieldSet, index) => (
            <RecipientsItem
              key={fieldSet.id} // 고유 ID를 key로 사용
              id={fieldSet.id}
              index={index}
              register={register}
              errors={errors}
              onRemove={handleRemovePersonField}
            />
          ))}
        </ModalBody>
        <ModalFooter>
          <button type='button' className='cancel' onClick={onClose}>
            취소
          </button>
          <button type='button' className='add' onClick={handleSubmit(onSubmit)}>
            추가하기
          </button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RecipientsModal;
