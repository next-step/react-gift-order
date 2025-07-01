export type RankType = {
    query: string;
    label: string;
};

export const rankType = [
    {
        query: "MANY_WISH",
        label: "받고 싶어한",
    },
    {
        query: "MANY_RECEIVE",
        label: "많이 선물한",
    },
    {
        query: "MANY_WISH_RECEIVE",
        label: "위시로 받은",
    },
] as const;
