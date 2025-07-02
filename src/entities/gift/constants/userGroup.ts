export type UserGroup = {
    query: string;
    iconText: string;
    label: string;
};

export const userGroup: UserGroup[] = [
    {
        query: "ALL",
        iconText: "ALL",
        label: "전체",
    },
    {
        query: "WOMEN",
        iconText: "👩‍🦰",
        label: "여성이",
    },
    {
        query: "MEN",
        iconText: "👨",
        label: "남성이",
    },
    {
        query: "TEEN",
        iconText: "👦",
        label: "청소년이",
    },
] as const;
