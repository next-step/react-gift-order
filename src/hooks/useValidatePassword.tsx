import { useEffect, useState } from 'react';
import validator from 'validator';

type UseValidatePassword = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  boolean,
  string,
];

export const useValidatePassword = (): UseValidatePassword => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFirstTry) {
      return;
    } else {
      if (password === '') {
        setIsValidPassword(false);
        setError('PW를 입력해주세요.');
        return;
      } else if (!validator.isLength(password, { min: 8 })) {
        setIsValidPassword(false);
        setError('PW는 최소 8글자 이상이어야 합니다.');
      } else {
        setIsValidPassword(true);
      }
    }
  }, [password, isFirstTry]);

  return [password, setPassword, isFirstTry, setIsFirstTry, isValidPassword, error];
};

export default useValidatePassword;
