import { rankType, type RankType } from "@/entities/gift/constants/rankType";

import { useQueryParamState } from "@/shared/hooks/useQueryParamState";

import * as Styles from "./RankTypeSelector.styled";

export const RankTypeSelector = () => {
    const [selectedRankType, setSelectedRankType] = useQueryParamState("rankType", "MANY_WISH");

    return (
        <Styles.SelectorContainer>
            {rankType.map((rank) => {
                return (
                    <RankTypeSelectorItem
                        key={rank.query}
                        label={rank.label}
                        query={rank.query}
                        isActive={selectedRankType === rank.query}
                        onSelect={setSelectedRankType}
                    />
                );
            })}
        </Styles.SelectorContainer>
    );
};

export interface RankTypeSelectorItemProps extends RankType {
    isActive: boolean;
    onSelect: (query: string) => void;
}

export const RankTypeSelectorItem = ({
    label,
    query,
    isActive = false,
    onSelect,
}: RankTypeSelectorItemProps) => {
    return (
        <Styles.ItemLabel isActive={isActive} onClick={() => onSelect(query)}>
            {label}
        </Styles.ItemLabel>
    );
};
