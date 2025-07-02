import type { PropsWithChildren } from "react";

import * as Styles from "./FriendSelection.styled";

export const FriendSelection = ({ children }: PropsWithChildren) => {
    return <Styles.Wrapper>{children}</Styles.Wrapper>;
};
