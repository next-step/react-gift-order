import { ErrorContainer } from '@/styles/Login.styles';
import type { RecieverType } from '@/pages/Order/Order';
import type { UseFieldArrayRemove, UseFieldArrayAppend } from 'react-hook-form';
import type { FormValues } from '@/pages/Order/Order';
import {
  ModalBackdrop,
  ModalBox,
  ModalTitle,
  ModalDesc,
  ModalInputRow,
  ModalInput,
  ModalRemoveBtn,
  ModalAddBtn,
  ModalInputTitle,
  ModalInputDetail,
  ModalActionBtn,
  ModalInputLabel,
  ModalCompleteBtn,
  ModalHeader,
  ModalAddBtnRow,
  ModalListScroll,
  ModalBtnRow,
} from '@/styles/Order/OrderModal.styles';
import useReciever from '@/hooks/useReciever';

type RecieverModalProps = {
  open: boolean;
  onClose: () => void;
  onComplete: (list: RecieverType[]) => void;
  initialList: RecieverType[];
  append: UseFieldArrayAppend<FormValues, 'reciever'>;
  remove: UseFieldArrayRemove;
};

function RecieverModal({
  open,
  onClose,
  onComplete,
  initialList,
  append,
  remove,
}: RecieverModalProps) {
  const { newList, fieldErrors, handleChange, handleAdd, handleRemove, handleComplete } =
    useReciever({
      open,
      onComplete,
      initialList,
      append,
      remove,
    });

  if (!open) return null;

  return (
    <ModalBackdrop>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
          <ModalDesc>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </ModalDesc>
        </ModalHeader>
        <ModalAddBtnRow>
          <ModalAddBtn
            type="button"
            onClick={handleAdd}
            disabled={newList.length >= 10}
            style={{ opacity: newList.length >= 10 ? 0.5 : 1 }}
          >
            추가하기
          </ModalAddBtn>
        </ModalAddBtnRow>
        <ModalListScroll>
          {newList.map((field, idx) => (
            <ModalInputRow key={idx}>
              <ModalInputTitle>
                <div>받는 사람 {idx + 1}</div>
                <ModalRemoveBtn type="button" onClick={() => handleRemove(idx)}>
                  X
                </ModalRemoveBtn>
              </ModalInputTitle>
              <ModalInputDetail>
                <ModalInputLabel>이름</ModalInputLabel>
                <ModalInput
                  type="text"
                  placeholder="이름을 입력하세요."
                  value={field.name}
                  onChange={(e) => handleChange(idx, 'name', e.target.value)}
                />
              </ModalInputDetail>
              {fieldErrors[idx]?.name && <ErrorContainer>{fieldErrors[idx].name}</ErrorContainer>}
              <ModalInputDetail>
                <ModalInputLabel>전화번호</ModalInputLabel>
                <ModalInput
                  type="text"
                  placeholder="전화번호를 입력하세요"
                  value={field.phone}
                  onChange={(e) => handleChange(idx, 'phone', e.target.value)}
                />
              </ModalInputDetail>
              {fieldErrors[idx]?.phone && <ErrorContainer>{fieldErrors[idx].phone}</ErrorContainer>}
              <ModalInputDetail>
                <ModalInputLabel>수량</ModalInputLabel>
                <ModalInput
                  type="number"
                  placeholder="수량"
                  min={1}
                  value={field.count}
                  onChange={(e) => handleChange(idx, 'count', Number(e.target.value))}
                />
              </ModalInputDetail>
              {fieldErrors[idx]?.count && <ErrorContainer>{fieldErrors[idx].count}</ErrorContainer>}
            </ModalInputRow>
          ))}
        </ModalListScroll>
        <ModalBtnRow>
          <ModalActionBtn type="button" onClick={onClose}>
            취소
          </ModalActionBtn>
          <ModalCompleteBtn type="button" onClick={handleComplete}>
            {newList.length}명 완료
          </ModalCompleteBtn>
        </ModalBtnRow>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default RecieverModal;
