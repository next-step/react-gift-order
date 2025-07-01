import kakaoLogo from "@/app/assets/kakao-logo.svg";

import { useRedirect } from "@/shared/hooks/useRedirect";
import { Button, Input } from "@/shared/ui";

import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";

import * as Styles from "./SignInPage.styled";

export default function SignInPage() {
    const { returnToRedirect } = useRedirect();

    return (
        <Styles.Container>
            <Styles.KakaoLogo src={kakaoLogo} alt="카카오" />

            <Styles.Form>
                <Styles.FieldSet>
                    <Input type="email" width="100%" height="44px" placeholder="이메일" />
                </Styles.FieldSet>
                <VerticalSpacing size="16px" />
                <Styles.FieldSet>
                    <Input type="password" width="100%" height="44px" placeholder="비밀번호" />
                </Styles.FieldSet>

                <VerticalSpacing size="48px" />

                <Button
                    variant="primary"
                    rounded={true}
                    width="100%"
                    height="44px"
                    onClick={() => returnToRedirect()}
                >
                    로그인
                </Button>
            </Styles.Form>
        </Styles.Container>
    );
}
