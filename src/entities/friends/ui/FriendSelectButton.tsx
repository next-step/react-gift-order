import { Plus } from "lucide-react";

import * as Styles from "./FriendSelectButton.styled";

export const FriendSelectButton = () => {
    return (
        <Styles.Button>
            <Styles.ButtonIcon>
                <Plus />
            </Styles.ButtonIcon>

            <Styles.ButtonLabel>선물할 친구를 선택해주세요</Styles.ButtonLabel>
        </Styles.Button>
    );
};
