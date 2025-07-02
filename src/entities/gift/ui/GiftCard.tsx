import type { PropsWithChildren } from "react";

import type { GiftModel } from "@/entities/gift/model/GiftModel";

import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";

import * as Styles from "./GiftCard.styled";

export const GiftCardGrid = ({ children }: PropsWithChildren) => {
    return <Styles.Grid>{children}</Styles.Grid>;
};

export interface GiftCardProps extends GiftModel {
    index: number;
    isHighlighted?: boolean;
}

export const GiftCard = ({
    index,
    id,
    name,
    imageURL,
    price,
    brandInfo,
    isHighlighted,
}: GiftCardProps) => {
    return (
        <Styles.Wrapper key={id}>
            <Styles.IndexLabel isHighlighted={isHighlighted}>{index}</Styles.IndexLabel>
            <Styles.Image src={imageURL}></Styles.Image>
            <VerticalSpacing size="12px" />

            <Styles.Container>
                <Styles.BrandLabel>{brandInfo.name}</Styles.BrandLabel>
                <Styles.MenuLabel>{name}</Styles.MenuLabel>
                <Styles.PriceLabel>{price.sellingPrice} 원</Styles.PriceLabel>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
