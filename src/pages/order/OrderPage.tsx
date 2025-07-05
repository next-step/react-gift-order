import { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { cardTemplates } from "@/features/order/constants/cardTemplate";
import { useOrder } from "@/features/order/hooks/useOrder";
import { LetterCard } from "@/features/order/ui/LetterCard";
import { ProductInfo } from "@/features/order/ui/ProductInfo";

import NotFoundPage from "@/pages/NotFoundPage";

import { useRedirect } from "@/shared/hooks/useRedirect";
import { Input, InputFieldGroup } from "@/shared/ui/Input";
import { TextArea } from "@/shared/ui/TextArea";

import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";

import * as Styles from "./OrderPage.styled";

const product = {
    id: 123,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imgSrc: "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: {
        basicPrice: 29000,
        discountRate: 0,
        sellingPrice: 29000,
    },
    brandInfo: {
        id: 2088,
        name: "BBQ",
        imageURL:
            "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
};

/**
 * container-presenter 패턴을 사용해서 최상위 컴포넌트를 container컴포넌트로 두고
 * 하위 컴포넌트로 props 를 넘겨주는 방식으로 했는데, 각 섹션별로 추상화하는게 좋을지 고민됨
 *
 * @example
 * <LetterCardSection/>
 * <LetterCardPreviewSection/>
 * <SenderFieldGroup/>
 * <ReceiverFieldGroup/>
 * <ProductInfoSection/>
 */
export default function OrderPage() {
    const { isAuthenticated } = useAuth();
    const { navigateWithRedirect } = useRedirect();

    const { id } = useParams();

    const [selectedLetterCardId, setSelectedLetterCardId] = useState<number>(cardTemplates[0].id);

    const letterCard = useMemo(
        () => cardTemplates.find((cardTemplate) => cardTemplate.id === selectedLetterCardId),
        [selectedLetterCardId],
    );

    const { orderRefs, submit, validationErrors, quantity, onQuantityChange } = useOrder();

    const onSubmitButtonClick = () => {
        console.log(submit());
    };

    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
    useEffect(() => {
        if (!isAuthenticated) navigateWithRedirect("/auth/signin");
    }, [isAuthenticated, navigateWithRedirect]);

    if (!id) return <NotFoundPage />;

    return (
        <Styles.Container>
            <Styles.LetterCardContainer>
                {cardTemplates.map((cardTemplate) => {
                    return (
                        <LetterCard
                            key={cardTemplate.id}
                            isSelected={cardTemplate.id === selectedLetterCardId}
                            imgSrc={cardTemplate.thumbUrl}
                            onClick={() => setSelectedLetterCardId(cardTemplate.id)}
                        />
                    );
                })}
            </Styles.LetterCardContainer>

            <VerticalSpacing size="12px" />

            <Styles.PreviewContainer>
                <Styles.Preview src={letterCard?.imageUrl} />
            </Styles.PreviewContainer>

            <VerticalSpacing size="40px" />

            <Styles.FieldSet>
                <TextArea
                    ref={orderRefs.message}
                    height="65px"
                    placeholder="메시지를 입력해주세요."
                    defaultValue={letterCard?.defaultTextMessage}
                />
            </Styles.FieldSet>

            <VerticalSpacing size="32px" />
            <VerticalSpacing size="8px" backgroundColor="#f3f4f5" />

            <Styles.FieldSet>
                <Styles.Legend>보내는 사람</Styles.Legend>
                <Input
                    ref={orderRefs.senderName}
                    placeholder="이름을 입력하세요."
                    error={validationErrors.senderName}
                />
            </Styles.FieldSet>

            <VerticalSpacing size="32px" />
            <VerticalSpacing size="8px" backgroundColor="#f3f4f5" />

            <Styles.FieldSet>
                <Styles.Legend>받는 사람</Styles.Legend>

                <InputFieldGroup
                    ref={orderRefs.receiverName}
                    id="receiver_name"
                    align="horizontal"
                    label="이름"
                    placeholder="이름을 입력하세요."
                    error={validationErrors.receiverName}
                />

                <VerticalSpacing size="12px" />

                <InputFieldGroup
                    ref={orderRefs.receiverPhoneNumber}
                    id="phone_number"
                    align="horizontal"
                    label="전화번호"
                    placeholder="전화번호를 입력하세요."
                    error={validationErrors.receiverPhoneNumber}
                />

                <VerticalSpacing size="12px" />

                <InputFieldGroup
                    ref={orderRefs.quantity}
                    id="quantity"
                    type="number"
                    align="horizontal"
                    label="수량"
                    placeholder="수량을 입력하세요."
                    value={quantity}
                    onChange={onQuantityChange}
                    error={validationErrors.quantity}
                />

                <VerticalSpacing size="24px" />
            </Styles.FieldSet>

            <VerticalSpacing size="8px" backgroundColor="#f3f4f5" />

            <Styles.FieldSet>
                <Styles.Legend>상품 정보</Styles.Legend>
                <ProductInfo
                    imgSrc={product.imgSrc}
                    productName={product.name}
                    brandName={product.brandInfo.name}
                    price={product.price.sellingPrice}
                />
            </Styles.FieldSet>

            <VerticalSpacing size="60px" />

            {createPortal(
                <Styles.OrderButton onClick={() => onSubmitButtonClick()}>
                    {product.price.sellingPrice * quantity}원 주문하기
                </Styles.OrderButton>,
                document.body as HTMLElement,
            )}
        </Styles.Container>
    );
}
