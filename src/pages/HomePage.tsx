import { FriendSelectButton } from "@/entities/friends/ui/FriendSelectButton";
import { FriendSelection } from "@/entities/friends/ui/FriendSelection";
import { giftCategory } from "@/entities/gift/constants/giftCategory";
import { GiftCard, GiftCardGrid } from "@/entities/gift/ui/GiftCard";
import { GiftCategoryGrid, GiftCategoryItem } from "@/entities/gift/ui/GiftCategoryGrid";
import { RankTypeSelector } from "@/entities/gift/ui/RankTypeSelector";
import { UserGroupSelector } from "@/entities/gift/ui/UserGroupSelector";

import { Banner } from "@/widgets/banner/Banner";
import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";
import { TitledSection } from "@/widgets/sections/TitledSection";

export default function HomePage() {
    return (
        <div>
            <FriendSelection>
                <FriendSelectButton />
            </FriendSelection>

            <VerticalSpacing size="24px" />

            <TitledSection title="선물 테마">
                <GiftCategoryGrid>
                    {giftCategory.map((category) => {
                        return (
                            <GiftCategoryItem
                                key={category.themeId}
                                imgSrc={category.image}
                                label={category.name}
                            />
                        );
                    })}
                </GiftCategoryGrid>
            </TitledSection>

            <VerticalSpacing size="24px" />

            <Banner
                title="프론트엔드 2단계 과제 화이팅! 🎉"
                subTitle="카카오테크 캠퍼스 3기여러분"
            />

            <VerticalSpacing size="40px" />

            <TitledSection title="실시간 급상승 선물랭킹">
                <UserGroupSelector />
                <VerticalSpacing size="16px" />

                <RankTypeSelector />
                <VerticalSpacing size="16px" />

                <GiftCardGrid>
                    {Array.from({ length: 21 })
                        .fill(null)
                        .map((_, index) => {
                            return (
                                <GiftCard
                                    isHighlighted={index < 3}
                                    index={index + 1}
                                    id={123}
                                    name="BBQ 양념치킨+크림치즈볼+콜라1.25L"
                                    imageURL="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
                                    price={{
                                        basicPrice: 29000,
                                        discountRate: 0,
                                        sellingPrice: 29000,
                                    }}
                                    brandInfo={{
                                        id: 2088,
                                        name: "BBQ",
                                        imageURL:
                                            "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
                                    }}
                                />
                            );
                        })}
                </GiftCardGrid>
            </TitledSection>
        </div>
    );
}
