import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";

import * as Styles from "./ProductInfo.styled";

export interface ProductInfoProps {
    imgSrc: string;
    productName: string;
    brandName: string;
    price: number;
}

export const ProductInfo = ({ imgSrc, productName, brandName, price }: ProductInfoProps) => {
    return (
        <Styles.Container>
            <Styles.Image src={imgSrc} />

            <Styles.InfoContainer>
                <Styles.ProductName>{productName}</Styles.ProductName>
                <Styles.BrandName>{brandName}</Styles.BrandName>

                <VerticalSpacing size="8px" />

                <Styles.Price>
                    <span>상품가 </span>
                    <span>{price}원</span>
                </Styles.Price>
            </Styles.InfoContainer>
        </Styles.Container>
    );
};
