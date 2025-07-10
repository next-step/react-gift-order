import type { inputType } from '@/types/inputType';
import React, { useEffect, useState } from 'react';
import { isMobilePhone } from 'validator';

type UseValidateOrderForm = [React.Dispatch<React.SetStateAction<string>>, string];

const useValidateOrderForm = (inputType: inputType): UseValidateOrderForm => {
  const isPhoneNumberType = inputType === 'phoneNumber';
  const isAmountType = inputType === 'amount';
  const [target, setTarget] = useState(isPhoneNumberType ? '01012345678' : '1');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAmountType) return;

    const input = target.replace(/-/g, '');

    if (input === 'modifying..') {
      setError('');
    } else if (input === '') {
      switch (inputType) {
        case 'message':
          setError('메시지를 입력해주세요.');
          break;
        case 'name':
          setError('이름을 입력해주세요.');
          break;
        case 'phoneNumber':
          setError('전화번호를 입력해주세요.');
          break;
        default:
          setError('');
          break;
      }
    } else if (inputType === 'phoneNumber' && !isMobilePhone(input, 'ko-KR')) {
      setError('올바른 전화번호 형식이 아닙니다.');
    }
  }, [isAmountType, inputType, target]);

  useEffect(() => {
    if (!isAmountType) return;

    const input = parseInt(target);

    if (input < 1) {
      setError('구매 수량은 1개 이상이어야 합니다.');
    } else {
      setError('');
    }
  }, [isAmountType, target]);

  return [setTarget, error];
};

export default useValidateOrderForm;
