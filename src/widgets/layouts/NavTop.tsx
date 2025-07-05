import { useNavigate } from "react-router-dom";

import { ChevronLeft, User } from "lucide-react";

import kakaoGiftLogo from "@/app/assets/kakao-gift-logo.png";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { useRedirect } from "@/shared/hooks/useRedirect";

import * as Styles from "./NavTop.styled";

export const NavTop = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { navigateWithRedirect } = useRedirect();

    const navigateToSignIn = () => {
        if (isAuthenticated) navigate("/my");
        else navigateWithRedirect("/auth/signin");
    };

    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.Item align="left">
                    <Styles.NavigateButton onClick={() => navigate(-1)}>
                        <ChevronLeft />
                    </Styles.NavigateButton>
                </Styles.Item>

                <Styles.Item align="center">
                    <img src={kakaoGiftLogo} alt="카카오 선물하기" height={44} />
                </Styles.Item>

                <Styles.Item align="right">
                    <Styles.NavigateButton onClick={() => navigateToSignIn()}>
                        <User />
                    </Styles.NavigateButton>
                </Styles.Item>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
