// src/hooks/useCommonOrderForm.ts
import { useState, useCallback, type ChangeEvent } from 'react';

interface BaiscOrderForm {
  sendName: string;
}
type CommonErrorMsgs = {
  [K in keyof BaiscOrderForm]?: string; // 모든 필드를 optional로 하여 에러가 없으면 빈 문자열이나 undefined가 되도록 합니다.
};

interface BaiscOrderFormHook {
  commonFormValues: BaiscOrderForm;
  commonErrorMsgs: CommonErrorMsgs;
  handleCommonChange: (e: ChangeEvent<HTMLInputElement>) => void; // input만 처리
  validateCommonForm: () => boolean;
  resetCommonForm: () => void;
}

export const useCommonOrderForm = (): BaiscOrderFormHook => {
  const [commonFormValues, setCommonFormValues] = useState<BaiscOrderForm>({
    sendName: '',
  });

  // 에러 메시지 배열 인덱스: 0: sendName, 1: receiveName, 2: receiveTel, 3: count
  const [commonErrorMsgs, setCommonErrorMsgs] = useState<CommonErrorMsgs>({});

  const handleCommonChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setCommonFormValues((prevValues) => ({
        ...prevValues,
        [name]: name === 'count' ? parseInt(value, 10) || 0 : value,
      }));

      // 입력 시 해당 필드의 에러 메시지 바로 초기화
      if (commonErrorMsgs[name as keyof BaiscOrderForm]) {
        setCommonErrorMsgs((prevErrors) => ({
          ...prevErrors,
          [name]: '', // 해당 필드의 에러 메시지를 빈 문자열로 설정
        }));
      }
    },
    [commonErrorMsgs]
  ); // 의존성 배열에 commonErrorMsgs 추가

  const validateCommonForm = useCallback((): boolean => {
    const localErrorMsgs: CommonErrorMsgs = {};
    let isValid = true;

    if (commonFormValues.sendName.trim() === '') {
      localErrorMsgs.sendName = '보내는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    setCommonErrorMsgs(localErrorMsgs);
    return isValid;
  }, [commonFormValues]);

  const resetCommonForm = useCallback(() => {
    setCommonFormValues({
      sendName: '',
    });
    setCommonErrorMsgs({});
  }, []);

  return {
    commonFormValues,
    commonErrorMsgs,
    handleCommonChange,
    validateCommonForm,
    resetCommonForm,
  };
};
