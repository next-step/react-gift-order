import styled from "@emotion/styled";

export const Wrapper = styled.nav`
    position: sticky;
    top: 0;

    width: 100%;
    height: 44px;

    background-color: #fff;
`;

export const Container = styled.ul`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0px ${({ theme }) => theme.spacing.spacing2};
`;

export const Item = styled.li<{ align: "left" | "center" | "right" }>`
    flex-grow: 1;
    gap: ${({ theme }) => theme.spacing.spacing1};

    display: flex;

    justify-content: ${({ align }) => {
        switch (align) {
            case "left":
                return "flex-start";
            case "center":
                return "center";
            case "right":
                return "flex-end";
        }
    }};
`;

export const NavigateButton = styled.button`
    display: block;
    width: fit-content;
    height: 100%;

    border: 0;
    background-color: transparent;
`;
