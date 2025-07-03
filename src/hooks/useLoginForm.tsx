// src/hooks/useLoginForm.ts
import { useState, useCallback, type ChangeEvent, type FocusEvent, useEffect } from 'react';

interface LoginForm {
  id: string;
  idError: string;
  handleIdChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIdBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

export const useLoginForm = (): LoginForm => {
  const [id, setId] = useState<string>(''); // ID 상태
  const [idError, setIdError] = useState<string>(''); // ID 입력 오류 메시지 상태
  const [idTouched, setIdTouched] = useState<boolean>(false); // ID input 태그 클릭 상태 -> 기본값 : 클릭되지 않은 상태

  const isValidEmail = (email: string): boolean => {
    // 정규 표현식을 통한 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // ID 유효성 검사 로직
  useEffect(() => {
    if (!idTouched)
      setIdError(''); //input 태그가 클릭되지 않은 상황에서 Error 값이 없으면 검사 통과
    else if (!id.trim()) {
      setIdError('ID를 입력해주세요.');
    } else if (!isValidEmail(id)) {
      setIdError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setIdError('');
    }
  }, [id, idTouched]);

  // ID 입력 변경 핸들러
  const handleIdChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  // ID 필드 벗어남 (blur) 핸들러
  const handleIdBlur = useCallback(() => {
    setIdTouched(true);
    //비동기 값 변환으로 첫 setIdTouched가 처음으로 사용자가 input 태그에 클릭하고 blur한 이후에 바로 idTouched에 반영되지 않음
  }, []);

  return {
    id,
    idError,
    handleIdChange,
    handleIdBlur,
  };
};
