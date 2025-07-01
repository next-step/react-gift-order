import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Outer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.color.semantic.backgroundDisabled};
`;

const Wrapper = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.semantic.backgroundDefault};
`;

export default function Layout({ children }: LayoutProps) {
    return <Outer><Wrapper>{children}</Wrapper></Outer>;
}