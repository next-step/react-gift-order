import React from 'react';
import { useLoginForm } from '@/hooks/useLoginForm';
import InputField from '@/components/Form/inputField';
import Button from '@/components/common/Button';
import * as S from './sytles';

const LoginForm: React.FC = () => {
  const { email, password, isFormValid, handleSubmit } = useLoginForm();

  return (
    <S.LoginSection>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="이메일"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          hasError={email.hasError}
          error={email.error}
        />        
        <S.Spacer />       
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          hasError={password.hasError}
          error={password.error}
        />       
        <S.Spacer />      
        <Button type="submit" disabled={!isFormValid}>
          로그인
        </Button>
      </form>
    </S.LoginSection>
  );
};

export default LoginForm;
