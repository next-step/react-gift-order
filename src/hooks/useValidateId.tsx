import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

type UseValidateId = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  string,
];

export const useValidateId = (): UseValidateId => {
  const [id, setId] = useState('');
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFirstTry) {
      return;
    } else {
      if (id === '') {
        setError('ID를 입력해주세요.'); // truthy
        return;
      } else if (!isEmail(id)) {
        setError('ID는 이메일 형식으로 입력해주세요.'); // truthy
      } else {
        setError(''); // falsy
      }
    }
  }, [id, isFirstTry]);

  return [id, setId, isFirstTry, setIsFirstTry, error];
};

export default useValidateId;
