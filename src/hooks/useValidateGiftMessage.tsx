import React, { useEffect, useState } from 'react';

type UseValidateGiftMessage = [React.Dispatch<React.SetStateAction<string>>, string];

const useValidateGiftMessage = (): UseValidateGiftMessage => {
  const [target, setTarget] = useState('target');
  const [error, setError] = useState('');

  useEffect(() => {
    if (target) {
      setError('');
    } else {
      setError('메시지를 입력해주세요.');
    }
  }, [target]);

  return [setTarget, error];
};

export default useValidateGiftMessage;
