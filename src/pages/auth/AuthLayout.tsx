import { Outlet } from "react-router-dom";

import * as Styles from "./AuthLayout.styled";

export const AuthLayout = () => {
    return (
        <Styles.Container>
            <Outlet />
        </Styles.Container>
    );
};
