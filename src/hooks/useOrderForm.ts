// src/hooks/useCommonOrderForm.ts
import { useState, useCallback, type ChangeEvent } from 'react';

interface BaiscOrderForm {
  sendName: string;
}

interface BaiscOrderFormHook {
  commonFormValues: BaiscOrderForm;
  commonErrorMsgs: string[];
  handleCommonChange: (e: ChangeEvent<HTMLInputElement>) => void; // input만 처리
  validateCommonForm: () => boolean;
  resetCommonForm: () => void;
}

export const useCommonOrderForm = (): BaiscOrderFormHook => {
  const [commonFormValues, setCommonFormValues] = useState<BaiscOrderForm>({
    sendName: '',
  });

  // 에러 메시지 배열 인덱스: 0: sendName, 1: receiveName, 2: receiveTel, 3: count
  const [commonErrorMsgs, setCommonErrorMsgs] = useState<string[]>(['', '', '', '']);

  const handleCommonChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setCommonFormValues((prevValues) => ({
        ...prevValues,
        [name]: name === 'count' ? parseInt(value, 10) || 0 : value,
      }));

      // 입력 시 해당 필드의 에러 메시지 바로 초기화
      const fieldNames = ['sendName'];
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

    setCommonErrorMsgs(localErrorMsgs);
    return isValid;
  }, [commonFormValues]);

  const resetCommonForm = useCallback(() => {
    setCommonFormValues({
      sendName: '',
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
