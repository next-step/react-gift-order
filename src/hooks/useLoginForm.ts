import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { validateId, validatePw } from '@/utils/validation';

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [touched, setTouched] = useState({ id: false, pw: false });

  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from ?? '/';
 
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  //유효성 검사
  const onBlurId = () => {
    setTouched((prev) => ({ ...prev, id: true }));
    setIdError(validateId(id)?? '');
  };

  const onBlurPw = () => {
    setTouched((prev) => ({ ...prev, pw: true }));
    setPwError(validatePw(pw)?? '');
  };

  const isValid = !!(id && !!pw && !idError && !pwError);


  //로그인 버튼 눌렀을 때
  const onSubmit = () => {
    if (!isValid) return;
    navigate(from, { replace: true });
  };

  return {
    id, pw,
    idError, pwError,
    touched,
    onChangeId, onChangePw,
    onBlurId, onBlurPw,
    onSubmit,
    isValid,
  };
};
