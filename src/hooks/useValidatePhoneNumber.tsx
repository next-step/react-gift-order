import React, { useEffect, useState } from 'react';
import { isMobilePhone } from 'validator';

type UseValidatePhoneNumber = [React.Dispatch<React.SetStateAction<string>>, string];

const useValidatePhoneNumber = (): UseValidatePhoneNumber => {
  const [target, setTarget] = useState('01012345678');
  const [error, setError] = useState('');

  useEffect(() => {
    const input = target.replace(/-/g, '');

    if (input === 'modifying..') {
      setError('');
    } else if (input === '') {
      setError('전화번호를 입력해주세요.');
    } else if (!isMobilePhone(input, 'ko-KR')) {
      setError('올바른 전화번호 형식이 아닙니다.');
    }
  }, [target]);

  return [setTarget, error];
};

export default useValidatePhoneNumber;
