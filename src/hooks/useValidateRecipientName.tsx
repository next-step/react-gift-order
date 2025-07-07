import React, { useEffect, useState } from 'react';

type UseValidateRecipientName = [React.Dispatch<React.SetStateAction<string>>, string];

const useValidateRecipientName = (): UseValidateRecipientName => {
  const [target, setTarget] = useState('target');
  const [error, setError] = useState('');

  useEffect(() => {
    if (target) {
      setError('');
    } else {
      setError('이름을 입력해주세요.');
    }
  }, [target]);

  return [setTarget, error];
};

export default useValidateRecipientName;
