import { userGroup, type UserGroup } from "@/entities/gift/constants/userGroup";

import { useQueryParamState } from "@/shared/hooks/useQueryParamState";

import * as Styles from "./UserGroupSelector.styled";

export const UserGroupSelector = () => {
    const [selectedGroup, setSelectedGroup] = useQueryParamState("targetType", "ALL");

    return (
        <Styles.SelectorContainer>
            {userGroup.map((group) => {
                return (
                    <UserGroupSelectorItem
                        key={group.query}
                        query={group.query}
                        iconText={group.iconText}
                        label={group.label}
                        isActive={selectedGroup === group.query}
                        onSelect={setSelectedGroup}
                    />
                );
            })}
        </Styles.SelectorContainer>
    );
};

export interface UserGroupSelectorItemProps extends UserGroup {
    isActive: boolean;
    onSelect: (query: string) => void;
}

export const UserGroupSelectorItem = ({
    query,
    iconText,
    label,
    isActive,
    onSelect,
}: UserGroupSelectorItemProps) => {
    return (
        <Styles.ItemContainer onClick={() => onSelect(query)}>
            <Styles.ItemIconText isActive={isActive}>{iconText}</Styles.ItemIconText>
            <Styles.ItemLabel isActive={isActive}>{label}</Styles.ItemLabel>
        </Styles.ItemContainer>
    );
};
