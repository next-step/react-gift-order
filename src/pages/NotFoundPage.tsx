import { useNavigate } from "react-router-dom";

import kakaoNotFoundImage from "@/app/assets/kakao-not-found.png";

import { Button } from "@/shared/ui";

import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";

import * as Styles from "./NotFoundPage.styled";
import { css } from "@emotion/react";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Styles.Container>
            <Styles.Image src={kakaoNotFoundImage} alt="잘못된 접근입니다" />
            <VerticalSpacing size="28px" />

            <Styles.Title>잘못된 접근입니다.</Styles.Title>
            <VerticalSpacing size="8px" />

            <Styles.Description>찾으시는 페이지가 존재하지 않습니다.</Styles.Description>
            <VerticalSpacing size="48px" />

            <Button
                variant="primary"
                width="160px"
                height="48px"
                rounded={false}
                onClick={() => navigate("/")}
                css={css`
                    display: block;
                    margin: 0px auto;
                `}
            >
                홈으로
            </Button>
        </Styles.Container>
    );
}
