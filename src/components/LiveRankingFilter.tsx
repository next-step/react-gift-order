import * as S from '@/components/LiveRankingStyle';

type FilterGenderProps = {
    icon: string;
    label: string;
    isActive: boolean;
    onClick: (label: string) => void;
};

export const FilterGender = ({
    icon,
    label,
    isActive,
    onClick,
}: FilterGenderProps) => {
    return (
        <S.GenderItem onClick={() => onClick(label)}>
            <S.GenderButton isActive={isActive}>{icon}</S.GenderButton>
            <S.GenderLabel isActive={isActive}>{label}</S.GenderLabel>
        </S.GenderItem>
    );
};

type FilterTypeProps = {
    label: string;
    isActive: boolean;
    onClick: (label: string) => void;
};

export const FilterType = ({ label, isActive, onClick }: FilterTypeProps) => {
    return (
        <S.TypeButton isActive={isActive} onClick={() => onClick(label)}>
            {label}
        </S.TypeButton>
    );
};
