import styled from "@emotion/styled";
import KakaoLogo from "@/assets/kakao-logo.svg?react";

const LoginLogoContainer = styled.div({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const LoginLogo = () => {
  return (
    <LoginLogoContainer>
      <KakaoLogo
        aria-label="카카오 로고"
        width={100}
        height={100}
        role="img"
      ></KakaoLogo>
    </LoginLogoContainer>
  );
};
