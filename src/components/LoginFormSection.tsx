import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { palette, spacing, typography } from '@/styles/theme';
import { useLoginForm } from '@/hooks/useLoginForm';

const wrapper = css`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing5};
  padding: 0 ${spacing.spacing6};
`;

const inputStyle = css`
  width: 100%;
  padding: 15px;
  border: 1px solid ${palette.gray200};
  border-radius: 8px;
  font-size: ${typography.body1Regular.fontSize};
`;

const error = css`
  margin-top: 4px;
  font-size: 12px;
  color: ${palette.red600};
`;
const LoginButton = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: ${typography.body1Bold.fontSize};
  color: ${palette.black};
  background: ${palette.primary};
  
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const LoginFormSection = () => {
  const {
    id, pw,
    idError, pwError,
    touched,
    onChangeId, onChangePw,
    onBlurId, onBlurPw,
    onSubmit,
    isValid,
  } = useLoginForm();

  return (
    <div css={wrapper}>
      <div>
        <input
          name="id"
          type="email"
          placeholder="이메일"
          value={id}
          onChange={onChangeId}
          onBlur={onBlurId}
          css={inputStyle}
        />
        {touched.id && idError && <div css={error}>{idError}</div>}
      </div>

      <div>
        <input
          name="pw"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={onChangePw}
          onBlur={onBlurPw}
          css={inputStyle}
        />
        {touched.pw && pwError && <div css={error}>{pwError}</div>}
      </div>

      <LoginButton type="button" onClick={onSubmit} disabled={!isValid}>
        로그인
      </LoginButton>
    </div>
  );
};
