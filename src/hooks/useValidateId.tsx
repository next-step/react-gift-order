import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

type UseValidateId = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  boolean,
  string,
];

export const useValidateId = (): UseValidateId => {
  const [id, setId] = useState('');
  const [isValidId, setIsValidId] = useState(false);
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFirstTry) {
      return;
    } else {
      if (id === '') {
        setIsValidId(false);
        setError('ID를 입력해주세요.');
        return;
      } else if (!isEmail(id)) {
        setIsValidId(false);
        setError('ID는 이메일 형식으로 입력해주세요.');
      } else {
        setIsValidId(true);
      }
    }
  }, [id, isFirstTry]);

  return [id, setId, isFirstTry, setIsFirstTry, isValidId, error];
};

export default useValidateId;
