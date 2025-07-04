// src/hooks/useLoginForm.ts
import { useState, useCallback, type ChangeEvent, type FocusEvent, useEffect } from 'react';

interface LoginPwForm {
  pw: string;
  pwError: string;
  handlePwChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePwBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

export const useLoginPwForm = (): LoginPwForm => {
  const [pw, setPw] = useState<string>(''); // ID 상태
  const [pwError, setPwError] = useState<string>(''); // Pw 입력 오류 메시지 상태
  const [pwTouched, setPwTouched] = useState<boolean>(false); // Pw input 태그 클릭 상태 -> 기본값 : 클릭되지 않은 상태
  const maxPwLength = 8;

  const isValidPw = (pw: string): boolean => {
    // 비밀번호 길이 검사 -> 이 값에 따라 오류문을 즉각 반영하기 위해 useEffect에 의존 배열로 isValidPw를 설정

    return pw.length < maxPwLength ? false : true;
  };

  // ID 유효성 검사 로직
  useEffect(() => {
    if (!pwTouched)
      setPwError(''); //input 태그가 클릭되지 않은 상황에서 Error 값이 없으면 검사 통과
    else if (!pw.trim()) {
      setPwError('비밀번호를 입력해주세요.');
    } else if (!isValidPw(pw)) {
      setPwError('비밀번호는 최소 8글자 이상이어야 합니다');
    } else {
      setPwError('');
    }
  }, [pw, pwTouched]);

  // ID 입력 변경 핸들러
  const handlePwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  }, []);

  // ID 필드 벗어남 (blur) 핸들러
  const handlePwBlur = useCallback(() => {
    setPwTouched(true);
    //비동기 값 변환으로 첫 setIdTouched가 처음으로 사용자가 input 태그에 클릭하고 blur한 이후에 바로 idTouched에 반영되지 않음
  }, []);

  return {
    pw,
    pwError,
    handlePwChange,
    handlePwBlur,
  };
};
