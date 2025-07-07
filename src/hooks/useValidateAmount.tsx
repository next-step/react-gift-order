import React, { useEffect, useState } from 'react';

type UseValidateAmount = [React.Dispatch<React.SetStateAction<number>>, string];

const useValidateAmount = (): UseValidateAmount => {
  const [target, setTarget] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    if (target) {
      setError('');
    } else {
      setError('구매 수량은 1개 이상이어야 합니다.');
    }
  }, [target]);

  return [setTarget, error];
};

export default useValidateAmount;
