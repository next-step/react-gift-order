import { useState } from 'react';
import { ErrorContainer } from '@/styles/Login.styles';
import type { RecieverType } from '@/pages/Order/Order';
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

interface RecieverModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: (list: RecieverType[]) => void;
  initialList: RecieverType[];
}

type FieldError = {
  name?: string;
  phone?: string;
  count?: string;
};

function RecieverModal({ open, onClose, onComplete, initialList }: RecieverModalProps) {
  const [list, setList] = useState<RecieverType[]>(initialList);
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);

  const handleChange = (idx: number, key: keyof RecieverType, value: string | number) => {
    setList((prev) => prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item)));
    setFieldErrors((prev) => {
      const next = [...prev];
      if (!next[idx]) next[idx] = {};
      let err = '';
      if (key === 'name') {
        if (!String(value).trim()) err = '이름을 입력해주세요.';
      } else if (key === 'phone') {
        if (!String(value).trim()) err = '전화번호를 입력해주세요.';
        else if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(String(value).replace(/-/g, '')))
          err = '올바른 전화번호 형식이 아닙니다.';
        else {
          const phones = list.map((r, i) => (i === idx ? value : r.phone));
          if (phones.filter((p) => p === value).length > 1)
            err = '동일한 전화번호는 입력할 수 없습니다.';
        }
      } else if (key === 'count') {
        if (!value || Number(value) < 1) err = '수량은 1개 이상이어야 합니다.';
      }
      next[idx] = { ...next[idx], [key]: err };
      return next;
    });
  };

  const handleAdd = () => {
    setList([...list, { name: '', phone: '', count: 1 }]);
    setFieldErrors([...fieldErrors, {}]);
  };

  const handleRemove = (idx: number) => {
    setList((prev) => prev.filter((_, i) => i !== idx));
    setFieldErrors((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleComplete = () => {
    const errors: FieldError[] = [];
    let hasError = false;
    const phones = list.map((r) => r.phone);
    list.forEach((item, idx) => {
      const err: FieldError = {};
      if (!item.name.trim()) {
        err.name = '이름을 입력해주세요.';
        hasError = true;
      }
      if (!item.phone.trim()) {
        err.phone = '전화번호를 입력해주세요.';
        hasError = true;
      } else if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(item.phone.replace(/-/g, ''))) {
        err.phone = '올바른 전화번호 형식이 아닙니다.';
        hasError = true;
      } else if (phones.filter((p) => p === item.phone).length > 1) {
        err.phone = '동일한 전화번호는 입력할 수 없습니다.';
        hasError = true;
      }
      if (!item.count || item.count < 1) {
        err.count = '수량은 1개 이상이어야 합니다.';
        hasError = true;
      }
      errors[idx] = err;
    });
    setFieldErrors(errors);
    if (hasError) return;
    onComplete(list);
  };

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
            disabled={list.length >= 10}
            style={{ opacity: list.length >= 10 ? 0.5 : 1 }}
          >
            추가하기
          </ModalAddBtn>
        </ModalAddBtnRow>
        <ModalListScroll>
          {list.map((field, idx) => (
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
            {list.length}명 완료
          </ModalCompleteBtn>
        </ModalBtnRow>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default RecieverModal;
