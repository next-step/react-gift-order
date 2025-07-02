// src/components/LoginLogic.tsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ROUTE_PATH } from '@/pages/Routes';
import { LoginFormSection } from './index.tsx';

export const LoginLogic: React.FC = () => {
  // 1) 라우트 파라미터 / 내비게이트 준비
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const navigate = useNavigate();

  // 2) 폼 상태 관리
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 3) 간단한 유효성 검사
  const validate = () => {
    if (!email.trim()) {
      alert('이메일을 입력해주세요.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('올바른 이메일 형식이 아닙니다.');
      return false;
    }
    if (password.length < 8) {
      alert('비밀번호는 최소 8자 이상이어야 합니다.');
      return false;
    }
    return true;
  };

  // 4) 제출 핸들러
  const handleSubmit = () => {
    if (!validate()) return;
    const target = redirect ? decodeURIComponent(redirect) : ROUTE_PATH.HOME;
    navigate(target);
  };

  // 5) UI 컴포넌트에 props로 상태·핸들러 넘기기
  return (
    <LoginFormSection
      email={email}
      password={password}
      onChangeEmail={e => setEmail(e.target.value)}
      onChangePassword={e => setPassword(e.target.value)}
      onSubmit={handleSubmit}
    />
  );
};
