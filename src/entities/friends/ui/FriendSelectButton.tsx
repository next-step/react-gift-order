import { Plus } from "lucide-react";

import { useAuth } from "@/features/auth/hooks/useAuth";

import * as Styles from "./FriendSelectButton.styled";

export interface FriendSelectButtonProps {
    // TODO: 현업에서 null vs undefined 어떤 기준에 따라 사용하는지
    nickname: string | null;
}

export const FriendSelectButton = () => {
    // TODO: nickname 을 상위에서 내려주는 방식 vs useAuth 훅을 통해 가져오는 방식
    // 저는
    // 1. 상위에서 불필요한 nickname ?? null 로직이 생성됨
    // 2. 어차피 context 로 nickname 을 가져올 수 있기 때문에 useAuth 훅을 통해 가져오는 방식이 더 낫다고 생각하였습니다
    const { nickname } = useAuth();

    return (
        <Styles.Button>
            <Styles.ButtonIcon>
                <Plus />
            </Styles.ButtonIcon>

            <Styles.ButtonLabel>
                {nickname && `${nickname}님! `}
                선물할 친구를 선택해주세요
            </Styles.ButtonLabel>
        </Styles.Button>
    );
};
