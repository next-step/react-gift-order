// import { useState } from 'react';
// import { EMAIL_REGEX } from '@/utils/regex';
// import {
//   ID_REQUIRED,
//   ID_INVALID,
//   PW_REQUIRED,
//   PW_TOO_SHORT,
// } from '@/constants/messages';

// function useInput(initialValue:string) {
//   const [value, setValue] = useState(initialValue);
//   const [error, setError] = useState('');

//   const validateEmail = (v: string) => {
//     if (!v) return ID_REQUIRED;
//     const ok = EMAIL_REGEX.test(v);
//     return ok ? '' : ID_INVALID;
//   };
  
//   const validatePassword = (v: string) => {
//     if (!v) return PW_REQUIRED;
//     return v.length >= 8 ? '' : PW_TOO_SHORT;
//   };

//   function onChange(s:string) {
    
//     setValue(s);
//   };

//   function onBlur(s:string) {
//     if(s === 'username') {
//       // TODO: 현재 value를 검증하고 검증했는데 검증에 잡히면 에러 메시지 업데이트
//       // 아이디에 관한 검증이 들어가야함
      
//       setError(validateEmail(value.trim()));
//     } else if(s === 'password') {
//       // TODO: 현재 value를 검증하고 검증했는데 검증에 잡히면 에러 메시지 업데이트
//       // 패스워드에 대한 검증이 들어가야함
//       setError(validatePassword(value.trim()));
//     }

//   };

//   return {value, error, onChange, onBlur};
// }

// export default useInput;

import { useState } from 'react';
import { EMAIL_REGEX } from '@/utils/regex';
import {
  ID_REQUIRED,
  ID_INVALID,
  PW_REQUIRED,
  PW_TOO_SHORT,
} from '@/constants/messages';

export type InputType = 'username' | 'password';

function useInput(type: InputType) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const validate = (v: string) => {
    const trimmed = v.trim();
    if (type === 'username') {
      if (!trimmed) return ID_REQUIRED;
      if (!EMAIL_REGEX.test(trimmed)) return ID_INVALID;
      return '';
    } else if (type === 'password') {
      if (!trimmed) return PW_REQUIRED;
      if (trimmed.length < 8) return PW_TOO_SHORT;
      return '';
    }
    return '';
  };

  const onChange = (val: string) => {
    setValue(val);
    if (touched) {
      setError(validate(val));
    }
  };

  const onBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  const isValid = error === '' && value.trim() !== '';

  return { value, error, onChange, onBlur, isValid };
}

export default useInput;

