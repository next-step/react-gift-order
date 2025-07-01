import { Outlet } from "react-router-dom";

import { NavTop } from "@/widgets/layouts/NavTop";

import * as Styles from "./RootLayout.styled";

export const RootLayout = () => {
    return (
        <Styles.Container>
            <NavTop />
            <Outlet />
        </Styles.Container>
    );
};
