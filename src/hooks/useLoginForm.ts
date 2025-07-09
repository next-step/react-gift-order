import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { validateId, validatePw } from '@/utils/validation';
import { useAuth } from '@/contexts/AuthContext'; 

export const useLoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [touched, setTouched] = useState({ id: false, pw: false });
  const { login } = useAuth(); 

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

  const onSubmit = () => {
    if (!isValid) return;
    const user = {
      id: id.split('@')[0], //@앞을 기준으로 id 설정
      email: id,
    };
    login(user);
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
