// src/hooks/useCommonOrderForm.ts
import { useState, useCallback, type ChangeEvent } from 'react';

interface CommonFormValues {
  sendName: string;
  receiveName: string;
  receiveTel: string;
  count: number;
}

interface CommonOrderFormHook {
  commonFormValues: CommonFormValues;
  commonErrorMsgs: string[];
  handleCommonChange: (e: ChangeEvent<HTMLInputElement>) => void; // input만 처리
  validateCommonForm: () => boolean;
  resetCommonForm: () => void;
}

export const useCommonOrderForm = (): CommonOrderFormHook => {
  const [commonFormValues, setCommonFormValues] = useState<CommonFormValues>({
    sendName: '',
    receiveName: '',
    receiveTel: '',
    count: 1,
  });

  // 에러 메시지 배열 인덱스: 0: sendName, 1: receiveName, 2: receiveTel, 3: count
  const [commonErrorMsgs, setCommonErrorMsgs] = useState<string[]>(['', '', '', '']);

  const isValidTel = (tel: string): boolean => {
    const phoneRegex = /^010\d{8}$/;
    return phoneRegex.test(tel);
  };

  const handleCommonChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setCommonFormValues((prevValues) => ({
        ...prevValues,
        [name]: name === 'count' ? parseInt(value, 10) || 0 : value,
      }));

      // 입력 시 해당 필드의 에러 메시지 바로 초기화
      const fieldNames = ['sendName', 'receiveName', 'receiveTel', 'count'];
      const fieldIndex = fieldNames.indexOf(name);
      if (fieldIndex !== -1 && commonErrorMsgs[fieldIndex]) {
        setCommonErrorMsgs((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[fieldIndex] = '';
          return newErrors;
        });
      }
    },
    [commonErrorMsgs]
  ); // 의존성 배열에 commonErrorMsgs 추가

  const validateCommonForm = useCallback((): boolean => {
    const localErrorMsgs: string[] = ['', '', '', '']; // 4개의 필드에 맞게 초기화
    let isValid = true;

    if (commonFormValues.sendName.trim() === '') {
      localErrorMsgs[0] = '보내는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    if (commonFormValues.receiveName.trim() === '') {
      localErrorMsgs[1] = '받는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    if (commonFormValues.receiveTel.trim() === '') {
      localErrorMsgs[2] = '전화번호를 입력해주세요.';
      isValid = false;
    } else if (!isValidTel(commonFormValues.receiveTel)) {
      localErrorMsgs[2] = '정확한 전화번호를 입력해주세요. (예: 01012341234)';
      isValid = false;
    }

    if (commonFormValues.count < 1 || isNaN(commonFormValues.count)) {
      localErrorMsgs[3] = '수량은 1개 이상이어야 합니다.';
      isValid = false;
    }

    setCommonErrorMsgs(localErrorMsgs);
    return isValid;
  }, [commonFormValues]);

  const resetCommonForm = useCallback(() => {
    setCommonFormValues({
      sendName: '',
      receiveName: '',
      receiveTel: '',
      count: 1,
    });
    setCommonErrorMsgs(['', '', '', '']);
  }, []);

  return {
    commonFormValues,
    commonErrorMsgs,
    handleCommonChange,
    validateCommonForm,
    resetCommonForm,
  };
};
