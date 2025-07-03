import { useEffect, useState } from 'react';
import validator from 'validator';

type UseValidatePassword = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  string,
];

export const useValidatePassword = (): UseValidatePassword => {
  const [password, setPassword] = useState('');
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFirstTry) {
      return;
    } else {
      if (password === '') {
        setError('PW를 입력해주세요.');
        return;
      } else if (!validator.isLength(password, { min: 8 })) {
        setError('PW는 최소 8글자 이상이어야 합니다.');
      } else {
        setError('');
      }
    }
  }, [password, isFirstTry]);

  return [password, setPassword, isFirstTry, setIsFirstTry, error];
};

export default useValidatePassword;
