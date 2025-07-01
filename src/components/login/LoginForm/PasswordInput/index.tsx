import { passwordInputStyle } from "./style";

export default function PasswordInput() {
  return (
    <input type="password" placeholder="비밀번호" css={passwordInputStyle} />
  );
}
